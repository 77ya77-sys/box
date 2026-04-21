import { useCallback, useId, useRef, useState } from 'react'
import styles from './BeforeAfterSlider.module.css'

type Props = {
  beforeSrc: string
  afterSrc: string
}

/**
 * Низ — полная «до» (beforeSrc). Верх — «после» (afterSrc), клип справа.
 * pct=0 (ползунок слева) — только низ, вся «до»; pct=100 (справа) — вся «после».
 */
export function BeforeAfterSlider({ beforeSrc, afterSrc }: Props) {
  const id = useId()
  const trackRef = useRef<HTMLDivElement>(null)
  const dragging = useRef(false)

  const [pct, setPct] = useState(50)

  const setFromClientX = useCallback((clientX: number) => {
    const el = trackRef.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const x = Math.min(Math.max(clientX - r.left, 0), r.width)
    setPct((x / r.width) * 100)
  }, [])

  const startDrag = useCallback(
    (e: React.PointerEvent, target: HTMLElement) => {
      dragging.current = true
      target.setPointerCapture(e.pointerId)
      setFromClientX(e.clientX)
    },
    [setFromClientX],
  )

  const onTrackPointerDown = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (e.button !== 0) return
      startDrag(e, e.currentTarget)
    },
    [startDrag],
  )

  const onTrackPointerMove = useCallback(
    (e: React.PointerEvent<HTMLDivElement>) => {
      if (!dragging.current) return
      setFromClientX(e.clientX)
    },
    [setFromClientX],
  )

  const endDrag = useCallback((e: React.PointerEvent<HTMLDivElement>) => {
    dragging.current = false
    try {
      e.currentTarget.releasePointerCapture(e.pointerId)
    } catch {
      /* ignore */
    }
  }, [])

  const onHandlePointerDown = useCallback(
    (e: React.PointerEvent<HTMLButtonElement>) => {
      e.stopPropagation()
      if (e.button !== 0) return
      const track = trackRef.current
      if (!track) return
      startDrag(e, track)
    },
    [startDrag],
  )

  const clipRight = `${100 - pct}%`

  const onKeyDown = (e: React.KeyboardEvent<HTMLButtonElement>) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault()
      setPct((p) => Math.max(0, p - 2))
    } else if (e.key === 'ArrowRight') {
      e.preventDefault()
      setPct((p) => Math.min(100, p + 2))
    } else if (e.key === 'Home') {
      e.preventDefault()
      setPct(0)
    } else if (e.key === 'End') {
      e.preventDefault()
      setPct(100)
    }
  }

  return (
    <div className={styles.wrap}>
      <div
        ref={trackRef}
        className={styles.track}
        onPointerDown={onTrackPointerDown}
        onPointerMove={onTrackPointerMove}
        onPointerUp={endDrag}
        onPointerCancel={endDrag}
        role="presentation"
      >
        <img className={styles.imgAfter} src={beforeSrc} alt="" decoding="async" draggable={false} />
        <div className={styles.beforeClip} style={{ clipPath: `inset(0 ${clipRight} 0 0)` }}>
          <img className={styles.imgBefore} src={afterSrc} alt="" decoding="async" draggable={false} />
        </div>

        <div className={styles.line} style={{ left: `${pct}%` }} aria-hidden />
        <button
          type="button"
          id={`${id}-handle`}
          className={styles.handle}
          style={{ left: `${pct}%` }}
          aria-label="Ползунок сравнения до и после"
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(pct)}
          role="slider"
          tabIndex={0}
          onKeyDown={onKeyDown}
          onPointerDown={onHandlePointerDown}
        >
          <span className={styles.handleGrip} aria-hidden />
        </button>
      </div>
    </div>
  )
}
