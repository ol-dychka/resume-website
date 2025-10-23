<script setup>
import { ref } from "vue";
const isOpen = ref(false);
</script>

<template>
  <div class="px-32">
    <div class="space-y-4">
      <p
        class="cursor-pointer text-slate-300 underline duration-200 hover:text-teal-600"
        @click="isOpen = !isOpen"
      >
        {{ isOpen ? "＜" : "＞" }}About Me
      </p>
      <transition
        enter-from-class="opacity-0  max-h-0"
        enter-active-class="transition-all duration-500 ease-in-out"
        enter-to-class="opacity-100 max-h-96"
        leave-from-class="opacity-100  max-h-96"
        leave-active-class="transition-all duration-200 ease-out"
        leave-to-class="opacity-0  max-h-0"
      >
        <div v-if="isOpen" class="inline-block overflow-hidden">
          <p class="">I'm glad to see you on my website!</p>
          <p class="">
            My name is Oleksandr and I'm originally from Ukraine. I moved to
            Canada after studying CS in university back home for 2 years.
            Although I had to leave my studies, my interest in programming
            hasn't decreased. I decided to expand my skillset by working on new
            interesting projects, which you can see below.
          </p>
          <p class="">
            If some of them interest you and you feel like I might be a good fit
            for your team, feel free to contact me via e-mail or LinkedIn!
          </p>
        </div>
      </transition>
    </div>
  </div>
</template>
