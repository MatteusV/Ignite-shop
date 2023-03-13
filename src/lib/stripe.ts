import Stripe from 'stripe'

const STRIPE_SECRETE_KEY = process.env.STRIPE_SECRET_KEY as string

export const stripe = new Stripe(STRIPE_SECRETE_KEY, {
  apiVersion: '2022-11-15',
  appInfo: {
    name: 'Ignite Shope',
  },
})
