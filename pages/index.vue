<template>
  <div class="columns is-gapless has-background-primary full-height">
    <div class="column is-one-fifth has-background-primary full-height">
      <div class="card has-background-white">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="/img/profile.jpg"
              alt="A picture of my beautiful face. I am wearing headphones and have a high-top fade" />
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">About Me</p>
            </div>
          </div>
          <div class="content">
            I'm Ralph. I am a quadriplegic wheelchair user, videogame nerd,
            basketball nerd, and slowly becoming a chess nerd 😀. This website is
            my attempt at documenting all the things I'm working on. I try to write about
            the things I'm learning, the things I'm building, and the things I'm thinking about.
            <br />
            <br />
            Professionally, I have been a software engineer for over 10 years,
            doing full-stack mobile and web development for small to medium, fast growing businesses.
            I enjoy working with Kotlin, Typescript, Python, and hopefully Rust soon. I am also acquiring
            machine learning skills, and I am excited to see how I can apply them to my projects.
            <br />
            <br />
          </div>
        </div>
        <footer class="card-footer">
          <a href="/resume.pdf" class="card-footer-item">Resume</a>
        </footer>
      </div>
    </div>
    <div class="column is-four-fifths has-background-primary">
      <section class="section">
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

.full-height {
  height: 100%;
}

.title {
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