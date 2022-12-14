import type { ParsedContent } from '@nuxt/content/dist/runtime/types'

export interface CardContent extends ParsedContent {
    thumbnail: string;
    date: string;
}