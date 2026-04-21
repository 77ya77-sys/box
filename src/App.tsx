import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './components/Layout/Layout'
import { DeliveryPaymentPage } from './pages/DeliveryPaymentPage'
import { HomePage } from './pages/HomePage'
import { LegalDocumentsPage } from './pages/LegalDocumentsPage'
import { ThankYouPage } from './pages/ThankYouPage'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/documents/" element={<LegalDocumentsPage />} />
        <Route path="/documents" element={<Navigate to="/documents/" replace />} />
        <Route path="/delivery-payment/" element={<DeliveryPaymentPage />} />
        <Route path="/delivery-payment" element={<Navigate to="/delivery-payment/" replace />} />
        <Route
          path="/offer/"
          element={<Navigate to={{ pathname: '/documents/', hash: 'public-offer' }} replace />}
        />
        <Route path="/offer" element={<Navigate to={{ pathname: '/documents/', hash: 'public-offer' }} replace />} />
        <Route
          path="/privacy/"
          element={<Navigate to={{ pathname: '/documents/', hash: 'privacy-policy' }} replace />}
        />
        <Route
          path="/privacy"
          element={<Navigate to={{ pathname: '/documents/', hash: 'privacy-policy' }} replace />}
        />
        <Route path="/thank-you/" element={<ThankYouPage />} />
        <Route path="/thank-you" element={<Navigate to="/thank-you/" replace />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}
