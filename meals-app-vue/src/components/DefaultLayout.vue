<template>
  <div class="bg-gray-200 min-h-screen">
    <navbar />
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import navbar from "./Navbar.vue";
</script>
