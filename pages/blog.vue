<template>
    <div class="section">
        <div class="columns" v-for="row in cards">
            <div class="column  is-one-third" v-for="card in row">
                <ContentListCardVue :content="card"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContentListCardVue, { CardContent } from '../components/ContentListCard.vue';
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

interface BlogCard extends MarkdownParsedContent {
    thumbnail: string;
    date: string;
    content: string;
}

const empty: CardContent[] = []
const getCards = async (): Promise<CardContent[][]> => {
    const { data } = await useAsyncData<BlogCard[]>(() => queryContent<BlogCard>('/').find())
    const result: CardContent[][] = []
    const temp = data.value?.map(card => {
        return <CardContent>{
            title: card.title,
            thumbnail: card.thumbnail,
            description: card.description,
            datetime: card.date,
            path: card._path || '/'
        }
    }) || empty
    while (temp.length) result.push(temp.splice(0, 3))
    return result
}

const cards: CardContent[][] = await getCards()
</script>