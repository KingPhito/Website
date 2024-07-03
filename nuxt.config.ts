// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    runtimeConfig: {
        public: {

        }
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=device-width, initial-scale=1',
            title: 'Ralph Dugue | Software Engineer',
            link: [
                { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
            ],
            meta: [
                { name: 'description', content: 'Ralph Dugue - Software Engineer | Content Creator' }
            ],
        }
    },
    css: ['~/assets/css/main.scss'],
    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },
    modules: [
        '@nuxt/content'
    ],
    content: {
        highlight: {
            theme: 'github-dark',
            preload: ["python", "go", "kotlin"]
        },
        experimental: {
            clientDB: true,
        }
    }
})