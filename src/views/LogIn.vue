<script setup lang="ts">
import { ref } from 'vue'

const loginForm = ref<{name: string, password:string}>({name:'',password:''})
let visible = ref<boolean>(false)
const changeVisibility = () => {
            visible.value = !visible.value
          }
const handleSubmit = () => {
console.log(loginForm.value)
}

</script>

<template>
  <main>
    <h1>login page</h1>
    <form @submit.prevent="handleSubmit">
    <div class="input-group">
      <label class="custom-label" for="name">Enter your name</label>
      <input class="custom-input" id="name" type="text" v-model.trim="loginForm.name" />
    </div>
    <br />
    <div class="input-group">
      <label class="custom-label" for="password">Enter your name</label>
      <input
        class="custom-input"
        id="password"
        :type="visible ? 'text' : 'password'"
        v-model="loginForm.password"
      /><button
        @click="changeVisibility"
        type="button"
      >
        show password
      </button>
    </div>
    <div class="action">
      <button>submit</button>
    </div>
  </form>
  </main>
</template>

<style lang="scss" scoped >
h1 {
  margin-bottom: 1.5rem;
}
.input-group {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 1rem;
}
.custom-label {
  opacity: 0.8;
  margin-right: 1rem;
}
.custom-input {
  padding: 4px 12px;
  font-size: 1.2rem;
}
.action {
  display: flex;
  justify-content: center;
  button {
    padding: 0.5rem 1.5rem;
  }
}
</style>