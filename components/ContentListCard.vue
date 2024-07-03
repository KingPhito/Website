<template>
  <a :href="content.path" class="card box">
    <div class="card-image has-background-white p-2">
      <figure class="image is-4by3">
        <img :src="content.thumbnail" :alt="`Thumbnail image of ${content.title}`">
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
        <time>{{ format(Date.parse(content.datetime), 'MMM dd, yyyy') }}</time>
      </div>
    </div>
  </a>
</template>

<script setup lang="ts">
import { format } from 'date-fns'
import type { CardContent } from '~/types'

const props = defineProps<{ content: CardContent }>()
</script>

<style scoped lang="scss">
@import "../assets/css/main.scss";

.card {
  &:hover {
    background-color: $secondary;

    .title {
      color: $primary;
    }
  }
}
</style>