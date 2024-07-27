<template>
  <a
    :href="href"
    target="_blank"
    class="px-2 py-1 bg-gray-400 text-white rounded border-2 hover:bg-gray-600"
    ><slot>Here we write the default value in case no value is passed</slot></a
  >
</template>

<script setup>
const props = defineProps({
  href: String,
});
</script>
