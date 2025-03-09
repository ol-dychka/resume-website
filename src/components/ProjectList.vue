<script setup>
import Ortohol from "./Projects/Ortohol.vue";
import Trittico from "./Projects/Trittico.vue";
import ChatgptFolders from "./Projects/ChatgptFolders.vue";
</script>

<template>
  <div class="space-y-16 px-8 py-12 md:px-32" id="projects">
    <p class="text-center text-5xl font-bold text-teal-800 sm:text-7xl">
      My Projects
    </p>
    <Ortohol />
    <div class="h-1 w-full rounded-sm bg-slate-200"></div>
    <Trittico />
    <div class="h-1 w-full rounded-sm bg-slate-200"></div>
    <ChatgptFolders />
  </div>
</template>
