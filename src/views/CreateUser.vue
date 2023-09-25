<script setup lang="ts">
import { ref } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const userName = ref<string>('')
const name = ref<string>('')
const email = ref<string>('')

const { mutate: createUser } = useMutation(gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      username
      id
    }
  }
`)

const handleSubmit = () => {
  createUser({
    input: {
      name: name.value,
      username: userName.value,
      email: email.value
    }
  })
  .then(
    ()=>{
      console.log('then worked')
      name.value = ''
      userName.value = ''
      email.value = ''
    }
  )
}
</script>

<template>
  <div>
    <h1>Create User</h1>

    <form @submit.prevent="handleSubmit">
      <div class="input-group">
        <label class="custom-label" for="name">Enter your name</label>
        <input class="custom-input" id="name" type="text" v-model.trim="name" />
      </div>
      <div class="input-group">
        <label class="custom-label" for="userName">Enter your nickname</label>
        <input class="custom-input" id="userName" type="text" v-model.trim="userName" />
      </div>
      <div class="input-group">
        <label class="custom-label" for="email">Enter your email</label>
        <input class="custom-input" id="email" type="text" v-model.trim="email" />
      </div>
      <div class="action">
        <button>submit</button>
      </div>
    </form>
  </div>
</template>