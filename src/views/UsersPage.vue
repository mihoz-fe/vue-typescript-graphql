<script setup lang="ts">
import { computed } from 'vue'
import { useQuery } from '@vue/apollo-composable'
import gql from 'graphql-tag'

import UsersList from '@/components/UsersList.vue'
import Loader from '@/components/LoaderComponent.vue'

const { result, loading, error } = useQuery(
  gql`
    query users {
      users {
        data {
          id
          username
        }
      }
    }
  `
)
const users = computed(() => result.value?.users.data ?? [])
</script>

<template>
  <div>
    <h1>Users List</h1>
    <Transition mode="out-in">
      <UsersList :users="users" v-if="users.length" />
      <h2 v-else-if="!loading">NO DATA</h2>
    </Transition>
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