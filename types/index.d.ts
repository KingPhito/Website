export { CardContent }

declare global {
    interface CardContent {
        title: 'Default Title',
        thumbnail: '/img/profile',
        description: 'Emty description.',
        datetime: 'Now...',
        path: '/',
        content: string,
    }
}