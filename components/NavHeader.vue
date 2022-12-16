<template>
    <header class="navbar box" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <NuxtLink to="/" class="navbar-item"
          ><img
            src="~/assets/images/icon.png"
            alt="My Logo, also links to home page"
        /></NuxtLink>
      </div>
      <div class="navbar-menu">
        <div class="navbar-end">
          <NuxtLink to="/" class="navbar-item">Home</NuxtLink>
          <NuxtLink to="/blog" class="navbar-item">Blog</NuxtLink>
          <NuxtLink to="/projects" class="navbar-item">Projects</NuxtLink>
          <NuxtLink to="/contact" class="navbar-item">Contact</NuxtLink>
        </div>
      </div>
    </header>
</template>

<script setup>
const route = useRoute();
</script>
