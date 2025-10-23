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
        <p class="text-3xl text-teal-600">Bicycle Website Landing Page</p>
        <div
          class="flex flex-wrap items-center gap-x-8 gap-y-2 text-2xl text-slate-300"
        >
          <a
            href="https://trittico-clone.pages.dev/"
            target="_blank"
            class="underline duration-200 hover:text-teal-600"
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
        <div class="mt-4 flex flex-wrap gap-x-8 text-slate-500">
          <p>React</p>
          <p>Tailwind</p>
        </div>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          This project is a replica of
          <a
            href="https://www.columbus1919.com/trittico"
            target="_blank"
            class="text-slate-300 duration-200 hover:text-teal-600"
            >Columbus Trittico</a
          >
          website, originally featured on Awwwards for its modern design. I
          recreated it with the same minimalistic style. Website is fully
          responsive and mobile-friendly.
        </p>
      </div>
    </div>
  </div>
</template>
