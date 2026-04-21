import { useCallback, useMemo, useState, type ReactNode } from 'react'
import { OrderModal } from './OrderModal'
import { OrderModalContext } from './order-modal-context'

export function OrderModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setOpen] = useState(false)

  const open = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])

  const value = useMemo(
    () => ({ open, close, isOpen }),
    [open, close, isOpen],
  )

  return (
    <OrderModalContext.Provider value={value}>
      {children}
      <OrderModal />
    </OrderModalContext.Provider>
  )
}
