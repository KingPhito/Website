<template>
  <div class="columns is-gapless">
    <div class="column is-one-fifth hero is-primary is-fullheight">
      <div class="container" style="margin: auto;">
        <section class="section">
          <figure class="image is-3by3">
            <img src="/img/profile.jpg" class="is-rounded"
              alt="A picture of my beautiful face. I am wearing headphones and have a high-top fade" />
          </figure>
        </section>
        <section class="section">
          <h1 class="title">About Me</h1>
          <h2 class="subtitle block">
            I'm Ralph. I am a quadriplegic wheelchair user, videogame nerd,
            basketball nerd, and slowly becoming a chess nerd 😀. This website is
            my attempt at documenting all the things I'm working on. I have more
            passions than time but at least I can keep track of them!
          </h2>
          <h2 class="subtitle block">
            Professionally, I have been a software engineer for over 10 years,
            doing full-stack mobile and web development for small to medium, fast growing businesses.
            I also do web development with this website made with Nuxt 3 and NetlifyCMS being
            one example. I enjoy working with Kotlin, Typescript, Python, and
            hopefully Rust soon.
          </h2>
        </section>
        <section class="section">
          <div class="columns is-centered">
            <div class="column is-half">
              <a href="/resume.pdf" target="_blank" class="button is-large" style="text-align: center;">Resume</a>
            </div>
          </div>
        </section>
      </div>
    </div>
    <div class="column is-four-fifths">
      <section class="section">
        <div class="columns" v-for="rows in socials">
          <div class="column is-half" v-for="social in rows">
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
  title: "Ralph Dugue | About Me",
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

const socials: Social[][] = [
  [
    {
      linkUrl: "https://www.linkedin.com/in/rdugue/",
      imageUrl: "/img/socials/linkedin.svg",
      alt: "Visit my LinkedIn"
    },
    {
      linkUrl: "https://gitlab.com/rdugue1",
      imageUrl: "/img/socials/gitlab.png",
      alt: "Visit my GitLab"
    },
  ],
  [
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
  ],
];
</script>
