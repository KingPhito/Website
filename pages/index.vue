<template>
  <div class="columns is-gapless">
    <div class="column is-centered is-one-fifth hero is-primary is-fullheight">
      <section class="section">
        <figure class="image is-3by3">
          <img
            src="~/assets/images/profile.png"
            placeholder="~/assets/images/icon.png"
          />
        </figure>
      </section>
      <section class="section">
        <h1 class="title">About Me</h1>
        <h2 class="subtitle block">
          I'm Ralph. I am a quadriplegic wheelchair user, videogame nerd,
          basketball nerd, and slowly becoming a chess nerd 😀. This website is
          my attempt at documenting all the things I'm working on.
        </h2>
        <h2 class="subtitle block">
          Professionally, I have been a software engineer for nearly 10 years,
          most of which has been spent working with Android. I also do web
          development with this website made with Nuxt 3 and NetlifyCMS being
          one example.
        </h2>
      </section>
    </div>
    <div class="column is-four-fifths"></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../assets/css/main.scss";

#about-me {
  background: $primary;
  color: $white;
}
</style>