<template>
  <div class="p-8 flex flex-col">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals..."
    />
    <div class="flex gap-1 mt-2 justify-center">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters.split('')"
      >
        {{ letter }}
      </router-link>
    </div>
    <pre>{{ ingredients }}</pre>
  </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import store from "./../store";
import api from "./../axiosconfig";
const ingredients = ref([]);
onMounted(async () => {
  const response = await api.get("/list.php?i=list");
  console.log(response.data);
  ingredients.value = response.data;
});
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
</script>
