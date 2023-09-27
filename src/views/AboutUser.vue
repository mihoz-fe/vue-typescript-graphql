<script setup lang="ts">
import { useRoute } from 'vue-router'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'
import UserPosts from '@/components/UserPosts.vue'
import Loader from '@/components/LoaderComponent.vue'

const route = useRoute()

console.log(route)

const { result, loading, error } = useQuery(
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
    id: route.params.id
  }),
  {errorPolicy: 'all'}
)

</script>

<template>
  <div>
    <h1>User page</h1>
    <UserPosts :user="result?.user" />
    <Loader v-if="loading" />
    <Transition>
      <div class="errored" v-if="error">
        <h2 style="{text-align: cenyer;}">
          {{ error?.message }}
        </h2>
      </div>
    </Transition>
  </div>
</template>

<style lang="scss" scoped >
h1 {
  margin-bottom: 1.5rem;
}
</style>