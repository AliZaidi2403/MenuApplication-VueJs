<template>
  <div class="p-8 flex flex-col">
    <input
      type="text"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals..."
    />

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
</script>
