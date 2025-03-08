'use client'

import { useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!)

interface Plan {
  name: string
  price: string
  description: string
  features: string[]
  id: 'basic' | 'pro' | 'enterprise'
}

const plans: Plan[] = [
  {
    name: 'Basic',
    price: '$9.99/month',
    description: 'Perfect for getting started',
    id: 'basic',
    features: [
      'Access to basic roadmaps',
      '50 practice questions/month',
      'Basic resume templates',
      'Community support',
    ],
  },
  {
    name: 'Pro',
    price: '$19.99/month',
    description: 'Most popular choice',
    id: 'pro',
    features: [
      'All basic features',
      'Unlimited practice questions',
      'Advanced roadmaps',
      'Priority support',
      'Mock interviews',
    ],
  },
  {
    name: 'Enterprise',
    price: '$49.99/month',
    description: 'For serious learners',
    id: 'enterprise',
    features: [
      'All pro features',
      'Personal mentor',
      'Custom learning paths',
      '1-on-1 mock interviews',
      'Job placement assistance',
    ],
  },
]

export function PricingDialog() {
  const [loading, setLoading] = useState<string | null>(null)

  const handleSubscribe = async (planId: string) => {
    try {
      setLoading(planId)
      const response = await fetch('/api/create-checkout-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ plan: planId }),
      })

      const { sessionId, error } = await response.json()
      if (error) throw new Error(error)

      const stripe = await stripePromise
      if (!stripe) throw new Error('Stripe failed to load')

      const { error: stripeError } = await stripe.redirectToCheckout({
        sessionId,
      })

      if (stripeError) throw stripeError
    } catch (error) {
      console.error('Error:', error)
      alert('Something went wrong! Please try again.')
    } finally {
      setLoading(null)
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="lg" className="bg-indigo-600 hover:bg-indigo-500 text-white">
          View Pricing
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center mb-4">
            Choose Your Plan
          </DialogTitle>
          <DialogDescription className="text-center mb-8">
            Select the perfect plan for your learning journey
          </DialogDescription>
        </DialogHeader>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan) => (
            <Card key={plan.id} className="relative">
              {plan.id === 'pro' && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-indigo-600 text-white px-3 py-1 rounded-full text-sm">
                    Popular
                  </span>
                </div>
              )}
              <CardHeader>
                <CardTitle>
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-3xl font-bold mt-2">{plan.price}</p>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-500 mb-4">{plan.description}</p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm">
                      <svg
                        className="h-5 w-5 text-green-500 mr-2"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button
                  className="w-full"
                  onClick={() => handleSubscribe(plan.id)}
                  disabled={!!loading}
                >
                  {loading === plan.id ? 'Processing...' : 'Subscribe Now'}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}