<template>

  <body class="has-background-white">
    <NavHeader />
    <Suspense>
      <NuxtPage />
      <template #fallback> Loading... </template>
    </Suspense>
  </body>
</template>

<style lang="scss">
@import "./assets/css/main.scss";

html {
  overflow: auto;
}
</style>
