<template>
  <div class="p-8 pb-0 text">
    <h1 class="text-4xl font-bold mb-4 text-gray-700">Random Meals</h1>
  </div>
  <Meals :meals="meals" />
</template>

<script setup>
import { onMounted, ref } from "vue";

import Meals from "../components/Meals.vue";
import api from "../axiosconfig.js";

const meals = ref([]);

onMounted(async () => {
  for (let i = 0; i < 10; i++) {
    api.get(`random.php`).then(({ data }) => meals.value.push(data.meals[0]));
  }
});
//A computed property is used to declaratively describe a value that depends on other values. When you data-bind to a computed property inside the template, Vue knows when to update the DOM when any of the values depended upon by the computed property has changed
</script>
