<script setup></script>

<template>
  <div class="px-32 py-12" id="home">
    <div class="flex justify-between items-center gap-12">
      <div class="space-y-8">
        <p class="font-bold text-7xl text-teal-800">Fullstack Developer</p>
        <p>
          Hi, I'm Oleksandr Dychka. Passionate developer and avid learner based
          in Toronto, Canada
        </p>
      </div>

      <div class="flex gap-4 items-center">
        <a
          href="https://linkedin.com/in/ol-dychka"
          target="_blank"
          class="hover:text-teal-800 duration-200"
        >
          <v-icon name="bi-linkedin" scale="2.5" />
        </a>
        <a
          href="https://github.com/ol-dychka"
          target="_blank"
          class="hover:text-teal-800 duration-200"
        >
          <v-icon name="bi-github" scale="2.5" />
        </a>
        <a
          href="https://drive.google.com/file/d/14YHq2PgjxFsb3FAC_jEAGtne8RaS-Wos/view?usp=sharing"
          target="_blank"
          class="hover:text-teal-800 duration-200 text-2xl"
        >
          Resume
        </a>
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
