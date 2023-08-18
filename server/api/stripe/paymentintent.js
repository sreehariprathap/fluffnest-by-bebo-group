import Stripe from "stripe"

export default defineEventHandler(async (event) => {
  const body = await readBody(event)
  const stripe = new Stripe(process.env.STRIPE_SK_KEY)

  return await stripe.paymentIntents.create({
    amount: Number(body.amount),
    currency: "usd",
    automatic_payment_methods: { enabled: true },
    description: "payment intent",
    shipping: {
      name: "Jenny Rosen",
      address: {
        line1: "510 Townsend St",
        postal_code: "98140",
        city: "San Francisco",
        state: "CA",
        country: "US",
      },
    },
  })
})
