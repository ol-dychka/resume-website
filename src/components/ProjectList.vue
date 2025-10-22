<script setup>
import Ortohol from "./Projects/Ortohol.vue";
import Trittico from "./Projects/Trittico.vue";
import ChatgptFolders from "./Projects/ChatgptFolders.vue";
import Elva from "./Projects/Elva.vue";
</script>

<template>
  <div class="mb-24 mt-80 space-y-16 px-8 md:px-32">
    <p class="text-center text-5xl font-bold text-teal-600 sm:text-7xl">
      My Projects
    </p>
    <Ortohol />
    <div class="h-1 w-full rounded-sm bg-slate-500"></div>
    <Elva />
    <div class="h-1 w-full rounded-sm bg-slate-500"></div>
    <ChatgptFolders />
    <div class="h-1 w-full rounded-sm bg-slate-500"></div>
    <Trittico />
  </div>
</template>
