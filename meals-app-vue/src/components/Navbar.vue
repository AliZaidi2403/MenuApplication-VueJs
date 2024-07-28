<template>
  <header class="bg-gray-400 shadow h-16 flex justify-between items-stretch">
    <router-link
      class="flex items-center px-5 h-full transition-colors hover:bg-gray-600 hover:text-white"
      :to="{ name: 'home' }"
      ><span class="text-xl from-stone-800 font-semibold"
        >Home</span
      ></router-link
    >
    <div class="flex items-center gap-1">
      <router-link
        :to="{ name: 'byName' }"
        class="flex items-center px-2 h-full transition-colors hover:bg-gray-600 hover:text-white"
        ><span class="text-xl from-stone-800 font-semibold"
          >Search Meals</span
        ></router-link
      >
      <router-link
        :to="{ name: 'byLetter' }"
        class="flex items-center px-2 h-full hover:bg-gray-600 hover:text-white"
        ><span class="text-xl from-stone-800 font-semibold"
          >Meals by Letters</span
        ></router-link
      >
      <router-link
        :to="{ name: 'ingredients' }"
        class="flex items-center px-2 h-full hover:bg-gray-600 hover:text-white"
        ><span class="text-xl from-stone-800 font-semibold"
          >Meals by Ingredients</span
        ></router-link
      >
    </div>
  </header>
</template>
