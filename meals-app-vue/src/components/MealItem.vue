<template>
  <div class="bg-gray-200 shadow rounded-xl hover:scale-105 transition-all">
    <img
      :src="meal.strMealThumb"
      alt="meal photo"
      class="rounded-t-xl w-full h-48 object-cover"
    />
    <div class="p-3">
      <h3 class="font-bold">{{ meal.strMeal }}</h3>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Incidunt
        minima quas alias accusantium perferendis nobis odit dolores cumque
        tempora facere voluptate animi! Laudantium, facere.
      </p>

      <div class="py-3 flex items-center justify-between">
        <YoutubeButton :href="meal.strYoutube">Youtbe</YoutubeButton>
        <router-link
          :to="{ name: 'mealDetails', params: { id: meal.idMeal } }"
          class="px-2 py-1 bg-gray-800 text-white rounded border-2 hover:bg-gray-600"
          >View</router-link
        >
      </div>
    </div>
  </div>
</template>

<script setup>
import YoutubeButton from "./YoutubeButton.vue";
const { meal } = defineProps({ meal: Object });
</script>
