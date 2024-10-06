const pageConfig = {
  title: "My Status Page",
  links: [
    { link: 'https://example.com', label: 'My Website' },
    { link: 'mailto:contact@example.com', label: 'Contact', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'gemini_vercel_monitor',
      name: 'Gemini Vercel Monitor',
      method: 'GET',
      target: 'https://gemini-vercel-tau.vercel.app',
      tooltip: 'Monitoring Gemini Vercel app',
      statusPageLink: 'https://gemini-vercel-tau.vercel.app',
      expectedCodes: [404],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
    {
      id: 'uptimeflare_pages_monitor',
      name: 'Uptimeflare Pages Monitor',
      method: 'GET',
      target: 'https://uptimeflare-1tb.pages.dev',
      tooltip: 'Monitoring Uptimeflare Pages app',
      statusPageLink: 'https://uptimeflare-1tb.pages.dev',
      expectedCodes: [200],
      timeout: 10000,
      headers: {
        'User-Agent': 'Uptimeflare',
      },
    },
  ],
  notification: {
    appriseApiServer: "https://apprise.example.com/notify",
    recipientUrl: "tgram://bottoken/ChatID",
    timeZone: "UTC",
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (env, monitor, isUp, timeIncidentStart, timeNow, reason) => {
      console.log(`Status changed for ${monitor.name}: ${isUp ? 'UP' : 'DOWN'}`);
    },
    onIncident: async (env, monitor, timeIncidentStart, timeNow, reason) => {
      console.log(`Ongoing incident for ${monitor.name}`);
    },
  },
}

export { pageConfig, workerConfig }
