<script setup lang="ts">
import { ref, computed } from 'vue'
import { useMutation } from '@vue/apollo-composable'
import gql from 'graphql-tag'

const userName = ref<string>('')
const name = ref<string>('')
const email = ref<string>('')
let newuser = ref<{ username: string; id: string }>({ username: '', id: '' })
let currentError = ref<string>('')

const { mutate: createUser, onDone, onError, error } = useMutation(gql`
  mutation createUser($input: CreateUserInput!) {
    createUser(input: $input) {
      username
      id
    }
  }
`)

const handleSubmit = () => {
  if (userName.value && name.value && email.value)
   try  {createUser({
      input: {
        name: name.value,
        username: userName.value,
        email: email.value
      }
    })
    onDone((response)=>{
      userName.value=''
      name.value=''
      email.value=''
      newuser.value = response.data.createUser
      console.log('response', response)
    })
    onError((error)=>{
      currentError.value = error.message
      setTimeout(()=>{currentError.value = ''},5000)
    })

  }
  catch(error: any) {
    console.error(error)
  }
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

    <Transition>
      <div class="result-block" v-if="newuser.id">
        <span>User &nbsp;</span><strong>{{ newuser?.username }}</strong
        ><span>&nbsp;successful created with id {{ newuser?.id }}</span>
      </div>
    </Transition>
    <Transition>
      <div class="errored" v-if="currentError">
        {{ currentError }}
      </div>
    </Transition>
  </div>
</template>

<style>
strong {
  font-weight: bold;
}
.result-block {
  margin-top: 1rem;
  font-size: 1.2rem;
}
.errored {
  color: rgb(122, 12, 12);
}
</style>