<template class="bg-gray-200">
  <div class="mx-auto max-w-[800px]">
    <h1 class="text-5xl font-bold mb-5">{{ meal.strMeal }}</h1>
    <img :src="meal.strMealThumb" :alt="meal.strMeal" class="w-full" />
    <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
      <div>
        <strong class="font-bold">Category</strong> : {{ meal.strCategory }}
      </div>
      <div><strong class="font-bold">Area</strong>: {{ meal.strArea }}</div>
      <div><strong class="font-bold">Tags</strong> : {{ meal.strTags }}</div>
    </div>
    <div class="my-3">
      {{ meal.strInstructions }}
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">
      <div>
        <h2 class="text-2xl font-semibold mb-2">Ingredients :</h2>
        <ul>
          <template v-for="(el, i) of new Array(20)">
            <li v-if="meal[`strIngredient${i + 1}`]">
              {{ i + 1 }}. {{ meal[`strIngredient${i + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div>
        <h2 class="text-2xl font-semibold mb-3">Measures</h2>
        <ul>
          <template v-for="(el, i) of new Array(20)">
            <li v-if="meal[`strMeasure${i + 1}`]">
              {{ i + 1 }}. {{ meal[`strMeasure${i + 1}`] }}
            </li>
          </template>
        </ul>
      </div>
      <div class="mt-4 mb-6 flex justify-around">
        <YoutubeButton :href="meal.strYoutube">Yotutbe</YoutubeButton>

        <a
          v-if="meal.strSource"
          :href="meal.strSource"
          target="_blank"
          class="px-2 py-1 bg-gray-600 text-white rounded border-2 hover:bg-gray-400"
        >
          View Original Source
        </a>

        <!--
          <p>This is how we can do optional rendering in vuejs</p>
          <p v-if="showParagraph">This paragraph is conditionally rendered.</p>
          <p v-else>This paragraph is shown when showParagraph is false.</p>
          <button @click="toggleParagraph">Toggle Paragraph</button>
          -->
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "./../axiosconfig.js";
import YoutubeButton from "./../components/YoutubeButton.vue";
const route = useRoute();
const meal = ref({});
onMounted(async () => {
  const response = await api.get(`lookup.php?i=${route.params.id}`);

  meal.value = response.data.meals[0] || {};
});
</script>
