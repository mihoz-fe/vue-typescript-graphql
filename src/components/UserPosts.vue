<script setup lang="ts">
 defineProps(['user'])
</script>

<template>
  <div v-if="user?.name">
      <h2>My name is {{ user?.name }}</h2>
      <p>and i have some posts:</p>
          <li v-for="(post, index) in user?.posts.data" :key="post.id" :data-index="index">
            {{ post.title }}
          </li>
    </div>
</template>