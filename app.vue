<template>
  <NavHeader />
  <body>
    <Suspense>
      <NuxtPage />
      <template #fallback> Loading... </template>
    </Suspense>
  </body>
</template>
