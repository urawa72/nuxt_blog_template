const { sourceFileArray } = require('./contents/posts/summary.json')

const sourceFileNameToUrl = filepath => {
  const deleteExt = filepath.replace('.md', '')
  const fileName = deleteExt.split('/')[deleteExt.split('/').length - 1]
  const splitArray = fileName.split('_')
  return `/posts/${splitArray[0]}/${splitArray[1]}`
}
const generateDynamicRoutes = callback => {
  const routes = sourceFileArray.map(sourceFileName => {
    return sourceFileNameToUrl(sourceFileName)
  })
  callback(null, routes)
}

export default {
  mode: 'universal',
  head: {
    title: 'nuxt_blog_template',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.jsでつくったブログのテンプレート' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'nuxt_blog_sample' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:title', property: 'og:title', content: 'nuxt_blog_sample' },
      { hid: 'og:url', property: 'og:url', content: 'https://sample.com/' },
      { hid: 'og:description', property: 'og:description', content: 'Nuxt.jsでつくったブログのテンプレート' },
    ],
    link: [
      // { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  loading: { color: '#fff' },
  css: [
    { src: '~/assets/css/common.scss', lang: 'scss' },
    { src: '~/node_modules/highlight.js/styles/hopscotch.css', lang: 'css' },
    '@fortawesome/fontawesome-free/css/all.css'
  ],
  plugins: [
  ],
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxtjs/markdownit',
    '@nuxtjs/sitemap',
    '@nuxtjs/style-resources',
    ["@nuxtjs/google-analytics", {
      id: "UA-XXXXXX-X"
    }]
  ],
  styleResources: {
    scss: [
      './assets/css/_mixins.scss'
      ]
  },
  markdownit: {
    preset: 'default',
    injected: true,
    breaks: true,
    html: true,
  },
  generate: {
    routes: generateDynamicRoutes
  },
  sitemap: {
    path: '/sitemap.xml',
    hostname: 'https://sample.com/',
    exclude: [
      '/about'
    ],
    routes: generateDynamicRoutes
  },
  build: {
    extend(config, ctx) {
    }
  }
}
