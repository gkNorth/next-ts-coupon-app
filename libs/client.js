import { createClient } from 'microcms-js-sdk'

export const client = createClient({
  serviceDomain: 'gkdev',
  apiKey: process.env.API_KEY,
})