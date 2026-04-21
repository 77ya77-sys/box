import type { ReactNode } from 'react'
import styles from './PageContainer.module.css'

type Props = {
  children: ReactNode
  className?: string
}

export function PageContainer({ children, className }: Props) {
  return (
    <div className={[styles.root, className].filter(Boolean).join(' ')}>
      {children}
    </div>
  )
}
