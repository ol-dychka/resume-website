<script setup></script>

<template>
  <div class="flex flex-wrap items-start justify-between gap-12 lg:flex-nowrap">
    <img
      src="@/assets/chatgptfolders.png"
      class="h-auto w-[500px] rounded-lg object-contain"
    />

    <div class="flex flex-col justify-between gap-6">
      <div class="space-y-4">
        <p class="text-3xl">ChatGPT Folders Chrome Extension</p>
        <div
          class="flex flex-wrap items-center gap-x-8 gap-y-2 text-2xl text-teal-800 underline"
        >
          <a
            href="https://chromewebstore.google.com/detail/chatgpt-folders/akgpkjgpdobkagnipbohfpagjmbpjnfb"
            target="_blank"
            class="duration-200 hover:text-teal-600"
          >
            Extension
          </a>
          <a
            href="https://chatgpt-folders.netlify.app/"
            target="_blank"
            class="duration-200 hover:text-teal-600"
          >
            Live Demo
          </a>
          <a
            href="https://github.com/ol-dychka/chatgpt-folders"
            target="_blank"
            class="duration-200 hover:text-teal-600"
          >
            <v-icon name="bi-github" scale="2" />
          </a>
        </div>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          Google Chrome extension developed in plain javascript to keep ChatGPT
          conversations organized in folders.
        </p>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          It was originally developed with backend in mind, but after ChatGPT
          announced similar feature of their own, I modified extension to save
          all data locally.
        </p>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          You can take a look at back-end version
          <a
            href="https://github.com/ol-dychka/chatgpt-folders-local"
            target="_blank"
            class="text-teal-800 underline hover:text-teal-600"
            >here</a
          >. I used javascript with express and mongoDB, featuring google
          authentification.
        </p>
      </div>
    </div>
  </div>
</template>
