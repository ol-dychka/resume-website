<script setup>
import { defineProps } from "vue";

const props = defineProps(["title", "text", "image", "links"]);

const getImageUrl = () => {
  return new URL(props.image, import.meta.url);
};
</script>

<template>
  <div class="flex justify-between gap-12">
    <div class="flex flex-col justify-between">
      <div>
        <p class="text-3xl">{{ title }}</p>
        <p class="font-normal mt-4">{{ text }}</p>
      </div>
      <div class="flex gap-8">
        <a
          :href="links.preview"
          target="_blank"
          class="hover:text-teal-800 duration-200"
          >Preview</a
        >
        <a
          :href="links.github"
          target="_blank"
          class="hover:text-teal-800 duration-200"
        >
          <v-icon name="bi-github" scale="1.5" />
        </a>
      </div>
    </div>
    <img :src="import(getImageUrl())" class="h-auto w-[500px] rounded-lg" />
  </div>
</template>
