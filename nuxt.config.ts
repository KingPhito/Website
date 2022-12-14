// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    app: {
        head: {
            charset: 'utf-16',
            viewport: 'width=500, initial-scale=1',
            title: 'Ralph | Software Engineer',
            meta: [
                // <meta name="description" content="My amazing site">
                { name: 'description', content: 'My blog site.' }
            ],
        }
    },
    ssr: false,
    css: ['~/assets/css/main.scss'],
    modules: [
        '@nuxt/content'
    ],
})