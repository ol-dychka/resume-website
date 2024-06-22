<script setup></script>

<template>
  <div class="flex justify-between gap-12">
    <div class="flex flex-col justify-between">
      <div>
        <p class="text-3xl">Bicycle Website Landing Page</p>
        <p class="font-normal mt-4">
          This website is a replica of
          <a
            href="https://www.columbus1919.com/trittico"
            target="_blank"
            class="text-teal-800 underline"
            >Columbus Trittico</a
          >
          website that was featured on Awwwards for its design. I maintained the
          same minimalistic design style.
        </p>
        <p class="font-normal mt-4">Stack: React, Tailwind</p>
      </div>
      <div class="flex gap-8">
        <a
          href="https://trittico-clone.pages.dev/"
          target="_blank"
          class="hover:text-teal-800 duration-200"
          >Preview</a
        >
        <a
          href="https://github.com/ol-dychka/trittico-clone"
          target="_blank"
          class="hover:text-teal-800 duration-200"
        >
          <v-icon name="bi-github" scale="1.5" />
        </a>
      </div>
    </div>
    <img src="@/assets/trittico.png" class="h-auto w-[500px] rounded-lg" />
  </div>
</template>
