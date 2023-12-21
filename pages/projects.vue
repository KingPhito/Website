<template>
    <div class="section">
        <div class="columns" v-for="row in cards">
            <div class="column is-one-third" v-for="card in row">
                <ContentListCardVue :content="card" />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContentListCardVue, { CardContent } from '../components/ContentListCard.vue';

useHead({
    title: 'Ralph Dugue | Projects',
    meta: [
        {
            hid: 'description',
            name: 'description',
            content: 'Projects by Ralph Dugue hosted on GitHub'
        }
    ]
})

interface GitHubData {
    name: string;
    description: string;
    html_url: string;
    created_at: string;
    topics: string[];
}

const API_ENDPOINT = 'https://api.github.com/orgs/KingPhito/repos'

const getThumbnail = (topics: string[]): string => {
    switch (true) {
        case topics.indexOf('android') !== -1:
            return "/images/uploads/android_robot.png"
        case topics.indexOf('grpc') !== -1:
            return "/images/uploads/grpc.png"
        case topics.indexOf('kotlin') !== -1:
            return "/images/uploads/kotlin.png"
        case topics.indexOf('typescript') !== -1:
            return "/images/uploads/typescript.png"
        case topics.indexOf('python') !== -1:
            return "/images/uploads/python.png"
        case topics.indexOf('go') !== -1:
            return "/images/uploads/gopher.png"
        default:
            return "/img/socials/github.svg"
    }
}

const getCards = async (): Promise<CardContent[][]> => {
    const { data } = await useFetch<GitHubData[]>(API_ENDPOINT)
    const result: CardContent[][] = []
    const temp = data.value?.map(project => {
        return <CardContent>{
            title: project.name,
            thumbnail: getThumbnail(project.topics),
            description: project.description,
            datetime: project.created_at,
            path: project.html_url
        }
    }) || []
    temp.sort((a: CardContent, b: CardContent) => Date.parse(b.datetime) - Date.parse(a.datetime))
    while (temp.length) result.push(temp.splice(0, 3))
    return result
}

const cards: CardContent[][] = await getCards()
</script>