<script setup>
import { ref } from "vue";
const email = ref("ol.dychka@gmail.com");
const copy = () => {
  navigator.clipboard.writeText("ol.dychka@gmail.com");
  email.value = "Copied!";

  setTimeout(() => {
    email.value = "ol.dychka@gmail.com";
  }, 1000);
};
</script>

<template>
  <div class="px-8 pb-8 pt-20 md:px-32" id="home">
    <div class="flex flex-wrap items-center justify-between gap-8">
      <div class="space-y-2">
        <p class="text-5xl font-bold text-teal-800 sm:text-7xl">
          Fullstack Developer
        </p>
        <p class="text-base sm:text-xl">
          Hi, I'm Alex. Passionate developer and avid learner based in Toronto,
          Canada
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-4">
        <p
          class="basis-full cursor-pointer text-teal-800 underline hover:text-teal-600 sm:basis-auto"
          @click="copy"
        >
          {{ email }}
        </p>
        <a
          href="https://linkedin.com/in/ol-dychka"
          target="_blank"
          class="duration-200 hover:text-teal-800"
        >
          <v-icon name="bi-linkedin" scale="2.5" />
        </a>
        <a
          href="https://github.com/ol-dychka"
          target="_blank"
          class="duration-200 hover:text-teal-800"
        >
          <v-icon name="bi-github" scale="2.5" />
        </a>
        <a
          href="https://drive.google.com/file/d/1kXm5Pa6dqJR1kJDutvFhJ6NOckJzGenT/view"
          target="_blank"
          class="text-lg duration-200 hover:text-teal-800 sm:text-2xl"
        >
          Resume
        </a>
      </div>
    </div>

    <!-- <p class="mr-16 hidden sm:block">Tech Stack</p> -->
    <div class="mt-12 flex flex-wrap items-center">
      <v-icon name="vi-file-type-html" scale="2.5" />
      <v-icon name="vi-file-type-css" scale="2.5" class="mr-8" />
      <v-icon name="vi-file-type-js-official" scale="2.5" />
      <v-icon name="vi-file-type-typescript-official" scale="2.5" />
      <v-icon name="vi-file-type-csharp2" scale="2.5" class="mr-8" />
      <v-icon name="vi-file-type-reactjs" scale="2.5" />
      <v-icon name="vi-file-type-vue" scale="2.5" />
      <v-icon name="vi-file-type-next" scale="2.5" class="mr-8" />
      <v-icon name="vi-file-type-tailwind" scale="2.5" />
      <v-icon name="si-mui" scale="2.5" />
    </div>
  </div>
</template>
