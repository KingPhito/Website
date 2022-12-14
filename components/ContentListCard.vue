<template>
    <div class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img :src="content.thumbnail" alt="Placeholder image">
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <div class="media-content">
            <p class="title is-4">{{ content.title }}</p>
          </div>
        </div>
        <div class="content">
          {{ content.description }}
          <br>
          <time datetime="2016-1-1">{{ content.datetime }}</time>
        </div>
      </div>
    </div>
</template>

<script setup lang="ts">
import { CardContent } from './CardContent'

const props = defineProps<{content: CardContent}>()
</script>