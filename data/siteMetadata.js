/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Personal Blog ',
  author: 'Prabhat',
  // headerTitle: 'TailwindBlog',
  description: 'I am a software engineer 🧑🏻‍💻 based in Hyderabad, India, who enjoys building things.',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: process.env.NODE_ENV === 'production' ? 'https://iprabhat.dev' : 'http://localhost:3001',
  siteRepo: 'https://github.com/TheCaffeineDev/personal-site',
  siteLogo: '/static/images/programmer.png',
  socialBanner: '/static/images/twitter-card.png',
  // mastodon: 'https://mastodon.social/@mastodonuser',
  email: 'iprabhatdev@gmail.com',
  github: 'https://github.com/thecaffeinedev',
  twitter: 'https://twitter.com/thecaffeinedev',
  instagram: 'https://www.instagram.com/caffeinedev/',
  youtube: 'https://www.youtube.com/channel/UC-756oKXdvH8GZEDF7GHIlw',
  stackoverflow: 'https://stackoverflow.com/users/8105979/prabhat-kumar-sahu',
  linkedin: 'https://www.linkedin.com/in/prabhat-kumar-sahu-b9a53674/',
  locale: 'en-US',
  analytics: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // supports Plausible, Simple Analytics, Umami, Posthog or Google Analytics.
    umamiAnalytics: {
      // We use an env variable for this site to avoid other users cloning our analytics ID
      umamiWebsiteId: '3cb1b39a-4dc9-4f58-bcb4-c257e61d9ac5', // e.g. 123e4567-e89b-12d3-a456-426614174000
    },
    // plausibleAnalytics: {
    //   plausibleDataDomain: '', // e.g. tailwind-nextjs-starter-blog.vercel.app
    // },
    // simpleAnalytics: {},
    // posthogAnalytics: {
    //   posthogProjectApiKey: '', // e.g. 123e4567-e89b-12d3-a456-426614174000
    // },
    googleAnalytics: {
      googleAnalyticsId: 'UA-150491781-1', // e.g. G-XXXXXXX
    },
  },
  newsletter: {
    // supports mailchimp, buttondown, convertkit, klaviyo, revue, emailoctopus
    // Please add your .env file and modify it according to your selection
    provider: 'buttondown',
  },
  comments: {
    // If you want to use an analytics provider you have to add it to the
    // content security policy in the `next.config.js` file.
    // Select a provider and use the environment variables associated to it
    // https://vercel.com/docs/environment-variables
    provider: 'giscus', // supported providers: giscus, utterances, disqus
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: 'thecaffeinedev/personal-site',
      repositoryId: 'R_kgDOKS-fyQ',
      category: 'General',
      categoryId: 'DIC_kwDOKS-fyc4CakYT',
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
      // This corresponds to the `data-lang="en"` in giscus's configurations
      lang: 'en',
    },
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: 'search.json', // path to load documents to search
    },
    // provider: 'algolia',
    // algoliaConfig: {
    //   // The application ID provided by Algolia
    //   appId: 'R2IYF7ETH7',
    //   // Public API key: it is safe to commit it
    //   apiKey: '599cec31baffa4868cae4e79f180729b',
    //   indexName: 'docsearch',
    // },
  },
}

module.exports = siteMetadata
