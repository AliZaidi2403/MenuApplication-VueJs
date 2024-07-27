<template>
  <header class="bg-white shadow h-16 flex justify-between items-stretch">
    <router-link class="flex items-center h-full px-5" :to="{ name: 'home' }"
      >Home</router-link
    >
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="flex items-center px-2 h-full transition-colors hover:bg-gray-600 hover:text-white"
        >Search Meals</router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="flex items-center px-2 h-full hover:bg-gray-600 hover:text-white"
        >Meals by Letters</router-link
      >
      <router-link
        :to="{ name: 'byIngredient' }"
        class="flex items-center px-2 h-full hover:bg-gray-600 hover:text-white"
        >Meals by Ingredients</router-link
      >
    </div>
  </header>
</template>
