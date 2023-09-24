<script setup lang="ts">
import { ref } from 'vue'
import { useLazyQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const userId = ref<string>('')
const { result, load, refetch } = useLazyQuery(
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
    id: userId.value
  })
)

const handleSubmit = () => {
  load() || refetch()
}

</script>

<template>
  <main>
    <h1>login page</h1>

    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label class="custom-label" for="name">Enter user id</label>
        <input class="custom-input" id="name" type="text" v-model.trim="userId" />
      </div>
      <div class="action">
        <button>submit</button>
      </div>
    </form>
    <br />
    <Transition>
    <div v-if="result?.user?.name">
      <h2>My name is {{ result?.user?.name }}</h2>
      <p>and i have some posts:</p>
          <li v-for="(post, index) in result?.user?.posts.data" :key="post.id" :data-index="index">
            {{ post.title }}
          </li>
    </div>
    </Transition>
  </main>
</template>

<style lang="scss" scoped >
h1 {
  margin-bottom: 1.5rem;
}
</style>