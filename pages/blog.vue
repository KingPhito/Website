<template>
    <div class="section" v-for="index in allMD.length" :key="index" v-if="index % 3 === 0">
        <div class="columns" v-for="n in 3" :key="n" v-if="n+index < allMD.length">
            <div class="column">
                <ContentListCardVue :content="allMD[n+index]"/>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { CardContent } from '../components/CardContent'
import ContentListCardVue from '../components/ContentListCard.vue';

const allMD: CardContent[] = queryContent<CardContent>('/')
</script>