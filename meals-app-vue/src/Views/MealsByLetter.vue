<template>
  <div class="p-8 pb-0">
    <h1 class="text-4xl font-bold mb-4 text-orange-500">Meals by Letter</h1>
  </div>
  <div>
    <div class="flex gap-1 mt-2 justify-center">
      <router-link
        :to="{ name: 'byLetter', params: { letter } }"
        v-for="letter of letters.split('')"
      >
        {{ letter }}
      </router-link>
    </div>
    <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
      <MealItem v-for="meal of meals" :key="meal.idMeal" :meal="meal" />
    </div>
  </div>
</template>
<script setup>
import { computed, onMounted, watch } from "vue";
import { useRoute } from "vue-router";
import store from "./../store/index.js";
import MealItem from "./../components/MealItem.vue";
const route = useRoute();
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const meals = computed(() => store.state.mealsByLetter);
onMounted(() => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
watch(route, () => {
  store.dispatch("searchMealsByLetter", route.params.letter);
});
</script>
