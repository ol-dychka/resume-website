<script setup></script>

<template>
  <div class="flex justify-between items-start gap-12">
    <img
      src="@/assets/chatgptfolders.png"
      class="h-auto w-[500px] rounded-lg object-contain"
    />

    <div class="flex flex-col justify-between gap-12">
      <div>
        <p class="text-3xl">ChatGPT Folders Chrome Extension</p>
        <p class="font-normal mt-4">
          Extension developed in plain javascript to keep ChatGPT conversations
          organized in folders. Has 2 versions.
        </p>
        <p class="font-normal mt-4">
          1: Extension that saves all data locally on your computer. This
          version is in process of being hosted in Chrome Web Store.
        </p>
        <p class="font-normal mt-4">
          2: Extension that's connected to REST API backend with mongoDB.
          Features google auth, drag-and-drop functionality, folder
          customization.
        </p>
        <p class="font-normal mt-4">
          Backend: javascript with express and google auth, mongoDB. Frontend:
          javascript (v.3 manifest chrome extension)
        </p>
      </div>
      <div class="flex gap-8">
        <a href="" target="_blank" class="hover:text-teal-800 duration-200">
          Extension
        </a>
        <a
          href="https://chatgpt-folders.netlify.app/"
          target="_blank"
          class="hover:text-teal-800 duration-200"
        >
          Website
        </a>
        <a
          href="https://github.com/ol-dychka/chatgpt-folders"
          target="_blank"
          class="hover:text-teal-800 duration-200"
        >
          <v-icon name="bi-github" scale="1.5" /> Server version
        </a>
        <a
          href="https://github.com/ol-dychka/chatgpt-folders-local"
          target="_blank"
          class="hover:text-teal-800 duration-200"
        >
          <v-icon name="bi-github" scale="1.5" /> Local version
        </a>
      </div>
    </div>
  </div>
</template>
