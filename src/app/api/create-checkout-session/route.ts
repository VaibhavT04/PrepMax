import { NextResponse } from 'next/server'
import Stripe from 'stripe'

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error('STRIPE_SECRET_KEY is not defined')
}

// Initialize Stripe without specifying API version
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(req: Request) {
  try {
    const { plan } = await req.json()

    // Define price IDs for different plans
    const priceIds = {
      basic: 'price_YOUR_BASIC_PRICE_ID',
      pro: 'price_YOUR_PRO_PRICE_ID',
      enterprise: 'price_YOUR_ENTERPRISE_PRICE_ID',
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: priceIds[plan as keyof typeof priceIds],
          quantity: 1,
        },
      ],
      mode: 'subscription',
      success_url: `${process.env.NEXT_PUBLIC_APP_URL}/dashboard?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL}/?canceled=true`,
    })

    return NextResponse.json({ sessionId: session.id })
  } catch (error) {
    console.error('Stripe API Error:', error)
    return NextResponse.json(
      { error: 'Error creating checkout session' },
      { status: 500 }
    )
  }
}