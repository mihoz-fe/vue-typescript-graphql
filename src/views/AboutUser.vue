<script setup lang="ts">
import { ref } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import UserPosts from '@/components/UserPosts.vue'

const userId = ref<string>('')
const { result } = useQuery(
  gql`
    query user($id: ID!) {
      user(id: $id) {
        name
        email
        username
        posts {
          data {
            title
            id
          }
        }
      }
    }
  `,
  () => ({
    id: 1
  })
)

</script>

<template>
  <div>
    <h1>User page</h1>
    <UserPosts user="result?.user" />
  </div>
</template>

<style lang="scss" scoped >
h1 {
  margin-bottom: 1.5rem;
}
</style>