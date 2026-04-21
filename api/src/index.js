import 'dotenv/config'
import cors from 'cors'
import express from 'express'

const app = express()
const port = Number(process.env.PORT) || 3001

const corsOrigins = process.env.CORS_ORIGIN
  ? process.env.CORS_ORIGIN.split(',').map((s) => s.trim())
  : ['http://localhost:5173', 'http://127.0.0.1:5173']

app.use(
  cors({
    origin: corsOrigins,
  }),
)
app.use(express.json())

app.get('/api/health', (_req, res) => {
  res.json({ ok: true })
})

app.post('/api/payments/create', (req, res) => {
  void req.body
  const shopId = process.env.YOOKASSA_SHOP_ID
  const secretKey = process.env.YOOKASSA_SECRET_KEY
  if (!shopId || !secretKey) {
    return res.status(503).json({
      error: 'yookassa_not_configured',
      message: 'Задайте YOOKASSA_SHOP_ID и YOOKASSA_SECRET_KEY в api/.env',
    })
  }

  return res.status(501).json({
    error: 'not_implemented',
    message: 'Интеграция создания платежа ЮKassa — следующий шаг',
  })
})

app.listen(port, '127.0.0.1', () => {
  console.info(`API: http://127.0.0.1:${port}`)
})
