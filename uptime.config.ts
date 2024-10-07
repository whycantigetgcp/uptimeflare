const pageConfig = {
  title: "My Status Page",
  links: [
    { link: 'https://github.com/yourusername', label: 'GitHub' },
    { link: 'https://yourblog.com', label: 'Blog' },
    { link: 'mailto:your@email.com', label: 'Email Me', highlight: true },
  ],
}

const workerConfig = {
  kvWriteCooldownMinutes: 3,
  monitors: [
    {
      id: 'gemini',
      name: 'gemini.ulaara.xyz',
      method: 'GET',
      target: 'https://gemini-vercel-tau.vercel.app',
      tooltip: 'Gemini',
      statusPageLink: 'https://gemini-vercel-tau.vercel.app',
      expectedCodes: [404],
      timeout: 10000,
    },
   {
      id: 'gemini-proxy',
      name: 'gemini-proxy.ulaara.xyz',
      method: 'GET',
      target: 'https://gemini-proxy.ulaara.xyz',
      tooltip: 'Gemini-Proxy',
      statusPageLink: 'https://gemini-proxy.ulaara.xyz',
      expectedCodes: [405],
      timeout: 10000,
    },
    {
      id: 'uptimeflare_pages_monitor',
      name: 'UptimeFlare Pages Monitor',
      method: 'GET',
      target: 'https://uptimeflare-1tb.pages.dev',
      tooltip: 'Monitoring UptimeFlare Pages site',
      statusPageLink: 'https://uptimeflare-1tb.pages.dev',
      expectedCodes: [200],
      timeout: 10000,
    },
  ],
  notification: {
    timeZone: "Asia/Shanghai",
    gracePeriod: 5,
  },
  callbacks: {
    onStatusChange: async (
      env: any,
      monitor: any,
      isUp: boolean,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // Add your status change handling logic here
    },
    onIncident: async (
      env: any,
      monitor: any,
      timeIncidentStart: number,
      timeNow: number,
      reason: string
    ) => {
      // Add your incident handling logic here
    },
  },
}

export { pageConfig, workerConfig }
