<script setup>
import { defineProps } from "vue";

const props = defineProps(["title", "text", "image", "links"]);

const getImageUrl = () => {
  return new URL(props.image, import.meta.url);
};
</script>

<template>
  <div class="flex justify-between gap-12">
    <img :src="getImageUrl()" class="h-auto w-[500px] rounded-lg" />
    <div class="flex flex-col justify-between">
      <div>
        <p class="text-3xl">{{ title }}</p>
        <p class="font-normal mt-4">{{ text }}</p>
      </div>
      <div class="flex gap-8">
        <a :href="links.preview">Preview</a>
        <a :href="links.github"> <v-icon name="bi-github" scale="1.5" /></a>
      </div>
    </div>
  </div>
</template>
