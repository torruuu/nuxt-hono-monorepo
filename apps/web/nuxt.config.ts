import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath } from 'node:url'

export default defineNuxtConfig({
  alias: {
    '@api': fileURLToPath(new URL('../api/src', import.meta.url)),
    '@web': fileURLToPath(new URL('./app', import.meta.url)),
  },
  modules: [
    '@nuxt/eslint',
    'shadcn-nuxt',
    '@nuxtjs/color-mode',
    '@nuxtjs/i18n',
    'vue-sonner/nuxt',
  ],
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  vite: {
    plugins: [tailwindcss()],
    optimizeDeps: {
      include: [
        'reka-ui',
        '@vueuse/core',
        '@tanstack/vue-query',
        'better-auth/vue',
        'lucide-vue-next',
        'clsx',
        'tailwind-merge',
        'vee-validate',
        'zod',
        'class-variance-authority',
        'better-auth/client/plugins',
      ],
    },
  },
  typescript: {
    typeCheck: false,
  },
  shadcn: {
    componentDir: './app/components/ui',
  },
  vueSonner: {
    css: false,
  },
  i18n: {
    strategy: 'no_prefix',
    locales: [
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'es', name: 'Español', file: 'es.json' },
    ],
    detectBrowserLanguage: {
      cookieKey: 'lang',
      alwaysRedirect: true,
      fallbackLocale: 'en',
    },
  },
  routeRules: {
    '/api/**': {
      proxy: `${process.env.NUXT_API_BASE}/**`,
    },
  },
  compatibilityDate: '2026-02-27',
})
