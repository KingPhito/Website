<template>
  <header class="navbar box" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <div class="navbar-item">
        <NuxtLink to="/" class="navbar-item">
          <img src="~/assets/images/icon.png" alt="My Logo, also links to home page" />
          <h1 class="title is-4">&nbsp;Ralph Dugue <br />
            <h4 class="subtitle is-6">&nbsp;&nbsp;Software Engineer</h4>
          </h1>
        </NuxtLink>
      </div>
    </div>
    <div class="navbar-menu">
      <div class="navbar-end">
        <NuxtLink to="/" class="navbar-item">Home</NuxtLink>
        <NuxtLink to="/blog" class="navbar-item">Blog</NuxtLink>
        <NuxtLink to="/projects" class="navbar-item">Projects</NuxtLink>
      </div>
    </div>
  </header>
</template>

<script setup>
const route = useRoute();
</script>
