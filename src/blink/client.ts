import { createClient } from '@blinkdotnew/sdk'

export const blink = createClient({
  projectId: import.meta.env.VITE_BLINK_PROJECT_ID || 'panas-robotics-site-d7obos04',
  publishableKey: import.meta.env.VITE_BLINK_PUBLISHABLE_KEY || 'blnk_pk_qhCGvkaNE7RynwfgtnRiSTv5V3uB1PCt',
  authRequired: false,
  auth: { mode: 'managed' },
})
