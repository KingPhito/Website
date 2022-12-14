<template>
  <header class="box">
    <nav class="navbar" role="navigation" aria-label="main navigation">
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
    </nav>
  </header>
</template>

<script setup>
const route = useRoute();

// When accessing /posts/1, route.params.id will be 1
console.log(route.params.id);
</script>
