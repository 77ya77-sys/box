import { createContext } from 'react'

export type OrderModalContextValue = {
  open: () => void
  close: () => void
  isOpen: boolean
}

export const OrderModalContext = createContext<OrderModalContextValue | null>(null)
