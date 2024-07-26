<template>
  <div class="container full-height is-max-widescreen">
    <article class="media">
      <figure class="media-left">
        <p class="image is-3by3">
          <img class="is-rounded" src="/img/profile.jpg" alt="Ralph Dugue" />
        </p>
      </figure>
      <div class="media-content">
        <div class="content">
          <h1 class="title is-primary">About Me</h1>
          <p>
            I'm a software engineer, and quadriplegic wheelchair user. I'm passionate about
            accessibility, and creating software that improves the lives of others. Professionally, I have been a
            software engineer for over a decade, doing full-stack mobile and web development for small to medium, fast
            growing businesses. More recently I have been working a lot with machine learning and generative AI. I enjoy
            working with Kotlin and Python. I also have experience with TypeScript and Nuxt,
            which is what this site is built with. I use this website to keep track of my writing and all the projects I
            am working on. In my free time I am videogame nerd, basketball nerd, and chess nerd.
          </p>
        </div>
        <div class="level">
          <a href="/resume.pdf" class="button is-large is-secondary">Resume</a>
        </div>
      </div>
    </article>
    <section class="section has-background-secondary">
      <h1 class="title">Connect With Me</h1>
      <div class="columns">
        <div class="column is-one-quarter" v-for="social in socials">
          <a :href="social.linkUrl" class="box">
            <figure class="image is-3by3">
              <img :src="social.imageUrl" :alt="social.alt" style="object-fit: cover;" />
            </figure>
          </a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
interface Social {
  linkUrl: string;
  imageUrl: string;
  alt: string;
}

useHead({
  title: "Ralph Dugue | Software Engineer",
  meta: [
    {
      name: "description",
      content: "Ralph Dugue is a software engineer, and quadriplegic wheelchair user."
    },
    {
      name: "keywords",
      content: "ralph dugue, software engineer, disability, wheelchair user, android, kotlin, typescript, nuxt, netlifycms"
    }
  ]
});

const socials: Social[] = [
  {
    linkUrl: "https://www.linkedin.com/in/rdugue/",
    imageUrl: "/img/socials/linkedin.svg",
    alt: "Visit my LinkedIn"
  },
  {
    linkUrl: "https://github.com/rdugue",
    imageUrl: "/img/socials/github.svg",
    alt: "Visit my Github"
  },
  {
    linkUrl: "https://www.twitch.tv/kingphito",
    imageUrl: "/img/socials/twitch.svg",
    alt: "Visit my Twitch channel"
  },
  {
    linkUrl: "https://twitter.com/KingPhito",
    imageUrl: "/img/socials/twitter.svg",
    alt: "Vist my Twitter account"
  },
];
</script>

<style scoped lang="scss">
@import "../assets/css/main.scss";

html,
body {
  height: 100%;
}

.is-secondary {
  color: $primary;
  background-color: $secondary-light;

  &:hover {
    background-color: $secondary;
  }
}

.full-height {
  height: 100%;
}

.media {
  margin-bottom: 2rem;

  .title {
    margin-bottom: 1rem;
    color: $primary;

  }
}

.title {
  margin-bottom: 1rem;
  color: $primary;

}

.content {
  font-size: 1.2rem;
  color: #000;
}

.box {
  &:hover {
    background-color: $secondary;
  }
}

.card-footer-item {
  &:hover {
    background-color: $secondary;
  }
}
</style>