import * as Sentry from '@sentry/browser'
import { Integrations } from '@sentry/tracing'
import { defineNuxtPlugin } from '#app'
import * as pkg from '~/package.json'

export default defineNuxtPlugin(() => {
  const release = `bytedream-juejin@${pkg.version}`
  const environment = process.env.NODE_ENV
  Sentry.init({
    dsn: 'https://b86016d8b3a84a2eabeaffe5cfdb0a07@o4504625564483584.ingest.sentry.io/4504625567825920',
    release,
    environment,
    integrations: [new Integrations.BrowserTracing()],
    sampleRate: 1,
    tracesSampleRate: 1,
  })
})
