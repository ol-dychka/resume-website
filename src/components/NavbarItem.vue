<script setup>
import { ref } from "vue";
const showCopied = ref(false);
const copy = () => {
  navigator.clipboard.writeText("ol.dychka@gmail.com");
  showCopied.value = true;

  setTimeout(() => {
    showCopied.value = false;
  }, 2000);
};
</script>

<template>
  <div class="fixed top-0 z-50 w-full">
    <div
      class="flex flex-wrap items-center justify-around gap-4 bg-gray-950 p-2 font-semibold text-slate-300 shadow-xl"
    >
      <div class="relative">
        <p
          class="cursor-pointer duration-200 hover:text-teal-600"
          @click="copy"
        >
          ol.dychka@gmail.com
        </p>
        <p
          class="absolute -right-20 top-0 opacity-0 transition-opacity duration-500 ease-in-out"
          :class="{ 'opacity-100': showCopied }"
        >
          Copied!
        </p>
      </div>
      <a
        href="https://drive.google.com/file/d/1kXm5Pa6dqJR1kJDutvFhJ6NOckJzGenT/view"
        target="_blank"
        class="duration-200 hover:text-teal-600"
      >
        Resume
      </a>
      <a
        href="https://linkedin.com/in/ol-dychka"
        target="_blank"
        class="duration-200 hover:text-teal-600"
      >
        <v-icon name="bi-linkedin" scale="2.5" />
      </a>
      <a
        href="https://github.com/ol-dychka"
        target="_blank"
        class="duration-200 hover:text-teal-600"
      >
        <v-icon name="bi-github" scale="2.5" />
      </a>
    </div>
  </div>
</template>
