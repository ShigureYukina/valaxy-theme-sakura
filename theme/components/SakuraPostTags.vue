<script lang="ts" setup>
import type { Post } from 'valaxy'

defineProps<{
  tags: Post['tags']
}>()
</script>

<template>
  <div class="sakura-post-tags">
    <RouterLink v-for="(tag, index) in tags" :key="tag" :to="{ path: '/tags/', query: { tag } }" class="inline-flex items-center align-top">
      <div v-if="index === 0" class="mr-1" i-mdi-tag-multiple />
      <span v-if="index > 0" class="non-hoverable mx-1">·</span> {{ tag }}
    </RouterLink>
  </div>
</template>

<style lang="scss">
.sakura-post-tags {
  font-size: 14px;

  a {
    color: var(--sakura-text-muted-color);
    transition: color 0.2s ease-out;

    &:hover {
      color: var(--sakura-accent-color);

      .non-hoverable {
        color: var(--sakura-text-muted-color) !important;
      }
    }
  }
}
</style>
