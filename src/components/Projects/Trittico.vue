<script setup></script>

<template>
  <div
    class="flex flex-wrap justify-between gap-12 lg:flex-row-reverse lg:flex-nowrap"
  >
    <img
      src="@/assets/trittico.png"
      class="h-auto w-[500px] rounded-lg object-contain"
    />
    <div class="flex flex-col justify-between gap-6">
      <div class="space-y-4">
        <p class="text-3xl">Bicycle Website Landing Page</p>
        <div
          class="flex flex-wrap items-center gap-x-8 gap-y-2 text-2xl text-teal-800 underline"
        >
          <a
            href="https://trittico-clone.pages.dev/"
            target="_blank"
            class="duration-200 hover:text-teal-600"
            >Live Demo</a
          >
          <a
            href="https://github.com/ol-dychka/trittico-clone"
            target="_blank"
            class="duration-200 hover:text-teal-600"
          >
            <v-icon name="bi-github" scale="2" />
          </a>
        </div>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          This website is a replica of
          <a
            href="https://www.columbus1919.com/trittico"
            target="_blank"
            class="text-teal-800 underline"
            >Columbus Trittico</a
          >
          website that was featured on Awwwards for its design. I maintained the
          same minimalistic design style. Website is fully responsive and
          mobile-friendly.
        </p>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          Stack: React, Tailwind
        </p>
      </div>
    </div>
  </div>
</template>
