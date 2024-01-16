<template>
  <NavHeader />

  <body>
    <Suspense>
      <NuxtPage />
      <template #fallback> Loading... </template>
    </Suspense>
  </body>
</template>

<style lang="scss">
html {
  overflow: auto;
}
</style>
