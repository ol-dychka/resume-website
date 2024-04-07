<script setup></script>

<template>
  <div class="px-48 py-12">
    <div class="flex justify-between items-center gap-12">
      <div class="space-y-8">
        <p class="font-bold text-7xl">Front-End React Developer</p>
        <p>
          Hi, I'm Oleksandr Dychka. Passionate developer and avid learner based
          in Toronto, Canada
        </p>
        <div class="flex gap-4">
          <a href="https://linkedin.com/">
            <v-icon name="bi-linkedin" scale="2.5" />
          </a>
          <a href="https://github.com/">
            <v-icon name="bi-github" scale="2.5" />
          </a>
        </div>
      </div>

      <div>
        <img
          src="@/assets/profile.jpg"
          class="rounded-full w-[500px] h-[500px] object-cover"
        />
      </div>
    </div>

    <div class="flex gap-12 items-center mt-12">
      <p>Tech Stack &#160;&#160;&#160; |</p>
      <div class="flex gap-2">
        <v-icon name="vi-file-type-html" scale="2.5" />
        <v-icon name="vi-file-type-css" scale="2.5" />
      </div>
      <div class="flex gap-2">
        <v-icon name="vi-file-type-js-official" scale="2.5" />
        <v-icon name="vi-file-type-typescript-official" scale="2.5" />
        <v-icon name="vi-file-type-csharp2" scale="2.5" />
      </div>
      <div class="flex gap-2">
        <v-icon name="vi-file-type-reactjs" scale="2.5" />
        <v-icon name="vi-file-type-vue" scale="2.5" />
        <v-icon name="vi-file-type-next" scale="2.5" />
      </div>
      <div class="flex gap-2">
        <v-icon name="vi-file-type-tailwind" scale="2.5" />
      </div>
    </div>
  </div>
</template>
