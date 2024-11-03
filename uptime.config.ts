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
      tooltip: 'UptimeFlare',
      statusPageLink: 'https://uptimeflare-1tb.pages.dev',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'hailuo_render_bulian',
      name: '海螺-render-bulian',
      method: 'GET',
      target: 'https://hailuo-free-api-0kq1.onrender.com/',
      tooltip: '海螺-render-bulian',
      statusPageLink: 'https://hailuo-free-api-0kq1.onrender.com/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'hailuo_render_zuqnxe',
      name: '海螺render-zuqnxe',
      method: 'GET',
      target: 'https://hailuo-free-api-fxvx.onrender.com/',
      tooltip: '海螺render-zuqnxe',
      statusPageLink: 'https://hailuo-free-api-fxvx.onrender.com/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'hailuo_render_unknown',
      name: '海螺render-不知道在哪',
      method: 'GET',
      target: 'https://hailuo-free-api-hj44.onrender.com/',
      tooltip: '海螺render-不知道在哪',
      statusPageLink: 'https://hailuo-free-api-hj44.onrender.com/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'oneapi_render',
      name: 'oneapi二开-render',
      method: 'GET',
      target: 'https://one.588686.xyz/',
      tooltip: 'oneapi二开-render',
      statusPageLink: 'https://one.588686.xyz/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'newapi_render',
      name: 'newapi-render',
      method: 'GET',
      target: 'https://new1.588686.xyz/',
      tooltip: 'newapi-render',
      statusPageLink: 'https://new1.588686.xyz/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'chatapi_render',
      name: 'chatapi-render',
      method: 'GET',
      target: 'https://chatapi.ulaara.xyz/home',
      tooltip: 'chatapi-render',
      statusPageLink: 'https://chatapi.ulaara.xyz/home',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'chatapi_render2',
      name: 'chatapi-render2',
      method: 'GET',
      target: 'https://chatapi.usy.me/home',
      tooltip: 'chatapi-render2',
      statusPageLink: 'https://chatapi.ulaara.xyz/home',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'voapi_render',
      name: 'voapi-render',
      method: 'GET',
      target: 'https://voapi.usy.me',
      tooltip: 'voapi-render',
      statusPageLink: 'https://voapi.usy.me',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'onehub_render',
      name: 'onehub-render(chatgpt.sydney)',
      method: 'GET',
      target: 'https://www.chatgpt.sydney/',
      tooltip: 'onehub-render(chatgpt.sydney)',
      statusPageLink: 'https://www.chatgpt.sydney/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'duck2api',
      name: 'duck2api',
      method: 'GET',
      target: 'https://duck.chatgpt.sydney/',
      tooltip: 'duck2api',
      statusPageLink: 'https://duck.chatgpt.sydney/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'openwebui_huggingface',
      name: 'openwebui-huggingface',
      method: 'GET',
      target: 'https://sgpsonnet-open-webui.hf.space/',
      tooltip: 'openwebui-huggingface',
      statusPageLink: 'https://sgpsonnet-open-webui.hf.space/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'fastgpt_huggingface',
      name: 'fastgpt-huggingface',
      method: 'GET',
      target: 'https://qwdgvsd-fastgpt.hf.space/',
      tooltip: 'fastgpt-huggingface',
      statusPageLink: 'https://qwdgvsd-fastgpt.hf.space/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'uptimekuma_huggingface',
      name: 'uptimekuma-huggingface',
      method: 'GET',
      target: 'https://state.588686.xyz/status/web',
      tooltip: 'uptimekuma-huggingface',
      statusPageLink: 'https://state.588686.xyz/status/web',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'chat_next_web_huggingface',
      name: 'chat-next-web-huggingface',
      method: 'GET',
      target: 'https://qwdgvsd-chatnextweb.hf.space/',
      tooltip: 'chat-next-web-huggingface',
      statusPageLink: 'https://qwdgvsd-chatnextweb.hf.space/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'real_cugan_huggingface',
      name: '大清晰术-huggingface',
      method: 'GET',
      target: 'https://qwdgvsd-real-cugan.hf.space/',
      tooltip: '大清晰术-huggingface',
      statusPageLink: 'https://qwdgvsd-real-cugan.hf.space/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'api_info_vercel',
      name: 'API信息查询-vercel',
      method: 'GET',
      target: 'https://key.588686.xyz/',
      tooltip: 'API信息查询-vercel',
      statusPageLink: 'https://key.588686.xyz/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'nextweb_vercel',
      name: 'nextweb-vercel',
      method: 'GET',
      target: 'https://next.588686.xyz/',
      tooltip: 'nextweb-vercel',
      statusPageLink: 'https://next.588686.xyz/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'email_cloudflare',
      name: 'email-cloudflare',
      method: 'GET',
      target: 'https://email.588686.xyz/',
      tooltip: 'email-cloudflare',
      statusPageLink: 'https://email.588686.xyz/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'bing_cloudflare',
      name: 'bing-cloudflare',
      method: 'GET',
      target: 'https://bing.588686.xyz/',
      tooltip: 'bing-cloudflare',
      statusPageLink: 'https://bing.588686.xyz/',
      expectedCodes: [200],
      timeout: 10000,
    },
    {
      id: 'openai_proxy_cloudflare',
      name: 'openai-proxy-cloudflare',
      method: 'GET',
      target: 'https://chat.588686.xyz/',
      tooltip: 'openai-proxy-cloudflare',
      statusPageLink: 'https://chat.588686.xyz/',
      expectedCodes: [421],
      timeout: 10000,
    },
    {
      id: 'coze_cn_cloudflare',
      name: 'coze.cn-cloudflare',
      method: 'GET',
      target: 'https://coze.588686.xyz/',
      tooltip: 'coze.cn-cloudflare',
      statusPageLink: 'https://coze.588686.xyz/',
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
