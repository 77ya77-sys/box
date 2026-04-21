import { useContext } from 'react'
import { OrderModalContext, type OrderModalContextValue } from './order-modal-context'

export function useOrderModal(): OrderModalContextValue {
  const ctx = useContext(OrderModalContext)
  if (!ctx) {
    throw new Error('useOrderModal должен вызываться внутри OrderModalProvider')
  }
  return ctx
}
