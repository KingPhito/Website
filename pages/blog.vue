<template>
    <div class="section">
        <div class="buttons is-centered">
            <button class="button" :class="{ 'is-primary': buttons.all, 'is-dark': !buttons.all }"
                @click="selectButton('all')">All</button>
            <button class="button" :class="{ 'is-primary': buttons.android, 'is-dark': !buttons.android }"
                @click="selectButton('android')">Android</button>
            <button class="button" :class="{ 'is-primary': buttons.go, 'is-dark': !buttons.go }"
                @click="selectButton('go')">Go</button>
            <button class="button" :class="{ 'is-primary': buttons.kotlin, 'is-dark': !buttons.kotlin }"
                @click="selectButton('kotlin')">Kotlin</button>
            <button class="button" :class="{ 'is-primary': buttons.ml, 'is-dark': !buttons.ml }"
                @click="selectButton('ml')">Machine Learning</button>
            <button class="button" :class="{ 'is-primary': buttons.opinion, 'is-dark': !buttons.opinion }"
                @click="selectButton('opinion')">Opinion</button>
            <button class="button" :class="{ 'is-primary': buttons.poetry, 'is-dark': !buttons.poetry }"
                @click="selectButton('poetry')">Poetry</button>
            <button class="button" :class="{ 'is-primary': buttons.python, 'is-dark': !buttons.python }"
                @click="selectButton('python')">Python</button>
        </div>
        <div class="columns" v-for="row in filteredCards">
            <div class="column  is-one-third" v-for="card in row">
                <ContentListCardVue :content="card" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { reactive, computed } from 'vue'
import ContentListCardVue, { CardContent } from '../components/ContentListCard.vue';
import type { MarkdownParsedContent } from '@nuxt/content/dist/runtime/types'

useHead({
    title: 'Ralph Dugue | Blog',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Blog posts by Ralph Dugue'
        }
    ]
})

interface BlogCard extends MarkdownParsedContent {
    thumbnail: string;
    stage: string;
    date: string;
    content: string;
}

interface Dictionary<T> {
    [Key: string]: T;
}


const buttons: Dictionary<boolean> = reactive({
    "all": true,
    "android": false,
    "go": false,
    "kotlin": false,
    "ml": false,
    "opinion": false,
    "poetry": false,
    "python": false,

})
function selectButton(button: string) {
    buttons.all = false
    buttons.android = false
    buttons.go = false
    buttons.kotlin = false
    buttons.ml = false
    buttons.opinion = false
    buttons.poetry = false
    buttons.python = false
    buttons[button] = true
}

const empty: CardContent[] = []
const getCards = async (): Promise<CardContent[]> => {
    const { data } = await useAsyncData<BlogCard[]>(() => queryContent<BlogCard>('/').find())
    return data.value?.filter(card => card.stage == "publish").map(card => {
        return <CardContent>{
            title: card.title,
            thumbnail: card.thumbnail,
            description: card.description,
            datetime: card.date,
            path: card._path || '/',
            content: card.content,
        }
    }) || empty

}
const cards: CardContent[] = await getCards()
const filteredCards = computed((): CardContent[][] => {
    const result: CardContent[][] = []
    const temp: CardContent[] = cards.filter(card => {
        if (buttons.all) return true
        if (buttons.android) return card.content == "android"
        if (buttons.go) return card.content == "go"
        if (buttons.kotlin) return card.content == "kotlin"
        if (buttons.ml) return card.content == "ml"
        if (buttons.opinion) return card.content == "opinion"
        if (buttons.poetry) return card.content == "poetry"
        if (buttons.python) return card.content == "python"
    })
    temp.sort((a: CardContent, b: CardContent) => Date.parse(b.datetime) - Date.parse(a.datetime))
    while (temp.length) result.push(temp.splice(0, 3))

    return result
})
</script>