<template>
    <div class="section">
        <div class="columns" v-for="row in cards">
            <div class="column is-one-third" v-for="card in row">
                <ContentListCardVue :content="card"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import ContentListCardVue, { CardContent } from '../components/ContentListCard.vue';

interface GitLabData {
    name: string;
    description: string;
    avatar_url: string;
    web_url: string;
    created_at: string;
}

const config = useRuntimeConfig()
const getCards = async (): Promise<CardContent[][]> => {
    const { data } = await useFetch<GitLabData[]>('https://gitlab.com/api/v4/users/rdugue1/projects?private_token=' + config.public.GITLAB_API_TOKEN)
    const result: CardContent[][] = []
    const temp = data.value?.map(project => {
        return <CardContent>{
            title: project.name,
            thumbnail: project.avatar_url,
            description: project.description,
            datetime: project.created_at,
            path: project.web_url
        }
    }) || []
    while (temp.length) result.push(temp.splice(0, 3))
    return result
}

const cards: CardContent[][] = await getCards()
</script>