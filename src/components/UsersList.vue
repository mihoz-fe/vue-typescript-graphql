<script setup lang="ts">
defineProps(['users'])

</script>

<template>
  <div>
  <Transition>
  <ul>
      <li v-for="user in users" :key="user.id">
        <RouterLink :to="{ name: 'aboutUser', params: {id: user.id} }">{{ user.username }}</RouterLink>
      </li>
    </ul>
    </Transition>
  </div>
</template>