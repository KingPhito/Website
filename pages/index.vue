<template>
  <div class="columns is-gapless">
    <div class="column is-one-fifth hero is-primary is-fullheight">
    <div class="container">
      <section class="section">
        <figure class="image is-3by3">
          <img
            src="/img/profile.jpg"
            alt="A picture of my beautiful face. I am wearing headphones and have a high-top fade"
          />
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
          Professionally, I have been a software engineer for nearly 10 years,
          most of which has been spent working with Android. I also do web
          development with this website made with Nuxt 3 and NetlifyCMS being
          one example. I enjoy working with Kotlin, Typescript, Python, and
          hopefully Go soon.
        </h2>
      </section>
    </div></div>
    <div class="column is-four-fifths">
      <section class="section">
        <div class="columns" v-for="rows in socials">
          <div class="column is-one-third" v-for="social in rows">
            <a :href="social.linkUrl" class="box">
              <figure class="image is-3by3">
                <img :src="social.imageUrl"  :alt="social.alt" object-fit: cover;/>
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

const socials: Social[][] = [
  [
    {
      linkUrl: "https://gitlab.com/rdugue1",
      imageUrl: "/img/socials/gitlab.png",
      alt: "Visit my GitLab"
    },
    {
      linkUrl: "https://www.linkedin.com/in/rdugue/",
      imageUrl: "/img/socials/linkedin.svg",
      alt: "Visit my LinkedIn"
    },
    {
      linkUrl: "https://www.polywork.com/kingphito",
      imageUrl: "/img/socials/polywork.svg",
      alt: "Visit my Polywork page"
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
    {
      linkUrl: "https://www.youtube.com/channel/UC9_SAi0OE5hp8X44A0HbWcw",
      imageUrl: "/img/socials/youtube.png",
      alt: "Vist my Youtube"
    },
  ],
];
</script>
