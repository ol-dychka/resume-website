<script setup></script>

<template>
  <div class="px-8 pb-8 pt-20 md:px-32">
    <div class="flex flex-col items-center justify-between gap-8 md:flex-row">
      <div class="z-10 space-y-2">
        <p class="text-5xl font-bold text-teal-600 sm:text-7xl">
          Oleksandr Dychka
        </p>
        <p class="text-5xl font-bold text-slate-400 sm:text-7xl">
          Fullstack Developer
        </p>
        <p class="text-base text-slate-500">
          Passionate developer and avid learner based in Toronto, Canada
        </p>
      </div>
      <div class="mt-12 space-y-8">
        <div class="flex items-center justify-center gap-4 md:justify-end">
          <p class="hidden text-6xl font-black text-slate-800 lg:block">
            LANGUAGES
          </p>
          <v-icon
            name="vi-file-type-js-official"
            scale="2.5"
            class="z-10 text-stone-800"
          />
          <v-icon
            name="vi-file-type-typescript-official"
            scale="2.5"
            class="z-10"
          />
          <v-icon name="la-java" scale="2.5" class="z-10 text-red-600" />
          <v-icon name="vi-file-type-csharp2" scale="2.5" class="z-10" />
        </div>
        <div
          class="flex items-center justify-center gap-4 md:-mr-8 md:justify-end"
        >
          <p class="hidden text-6xl font-black text-slate-800 lg:block">
            FRONTEND
          </p>
          <v-icon name="vi-file-type-reactjs" scale="2.5" class="z-10" />
          <v-icon name="vi-file-type-vue" scale="2.5" class="z-10" />
          <v-icon name="vi-file-type-angular" scale="2.5" class="z-10" />
          <v-icon
            name="md-extension-sharp"
            scale="2.5"
            class="z-10 text-slate-300"
          />
        </div>
        <div class="flex items-center justify-center gap-4 md:justify-end">
          <p class="hidden text-6xl font-black text-slate-800 lg:block">
            STYLING
          </p>
          <v-icon name="vi-file-type-tailwind" scale="2.5" class="z-10" />
          <v-icon name="si-mui" scale="2.5" class="z-10 text-blue-600" />
          <v-icon name="vi-file-type-sass" scale="2.5" class="z-10" />
        </div>
        <div
          class="flex items-center justify-center gap-4 md:-mr-8 md:justify-end"
        >
          <p class="hidden text-6xl font-black text-slate-800 lg:block">DB</p>
          <v-icon name="vi-file-type-pgsql" scale="2.5" class="z-10" />
          <v-icon name="vi-file-type-mongo" scale="2.5" class="z-10" />
        </div>
        <div class="flex items-center justify-center gap-4 md:justify-end">
          <p class="hidden text-6xl font-black text-slate-800 lg:block">
            CLOUD
          </p>
          <v-icon
            name="io-logo-docker"
            scale="2.5"
            class="z-10 text-blue-500"
          />
          <v-icon name="fa-aws" scale="2.5" class="z-10 text-orange-500" />
          <v-icon name="vi-file-type-terraform" scale="2.5" class="z-10" />
        </div>
      </div>
    </div>
  </div>
</template>
