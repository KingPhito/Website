// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: true,
    runtimeConfig: {
        public: {
            GITLAB_API_TOKEN: process.env.GITLAB_API_TOKEN
        }
    },
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Ralph | Software Engineer',
            meta: [
                { name: 'description', content: 'My blog site.' }
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
            preload: ["python", "go"]
        }
    }
})