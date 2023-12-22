// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
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
                { rel: 'icon', type: 'image/x-icon', href: '_nuxt/assets/images/favicon.ico' }
            ],
            meta: [
                { name: 'description', content: 'My name is Ralph, and I am a software engineer and tech content creator.' }
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
        }
    },
    nitro: {
        devServer: {
            watch: ['./pages/*', './components/*', './layouts/*', './assets/css/*']
        }
    }
})