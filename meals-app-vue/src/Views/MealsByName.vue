<template>
  <div class="p-8">
    <input
      type="text"
      v-model="keyword"
      @change="searchMeals"
      class="rounded border-2 border-gray-200 w-full"
      placeholder="Search for meals"
    />
  </div>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-5 p-8">
    <div
      v-for="meal of meals"
      :key="meal.idMeal"
      class="bg-gray-200 shadow rounded-xl hover:scale-105 transition-all"
    >
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
          <a
            :href="meal.strYoutube"
            target="_blank"
            class="px-2 py-1 bg-gray-400 text-white rounded border-2 hover:bg-gray-600"
            >Youtube</a
          >
          <router-link
            to="/"
            class="px-2 py-1 bg-gray-800 text-white rounded border-2 hover:bg-gray-600"
            >View</router-link
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, computed, onMounted } from "vue";
import { useRoute } from "vue-router";
import api from "./../axiosconfig";
import store from "./../store/index";
const route = useRoute();
const keyword = ref("");
const meals = computed(() => store.state.searchedMeals);
function searchMeals() {
  store.dispatch("searchMeals", keyword.value);
}
onMounted(() => {
  keyword.value = route.params.name;
  if (keyword.value) {
    searchMeals();
  }
});
</script>
