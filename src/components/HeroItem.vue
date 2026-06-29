<script setup>
import TechIcon from "./reusable/TechIcon.vue";
</script>

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
          Passionate developer and enthusiastic learner based in Toronto, Canada
        </p>
      </div>
      <div class="mt-12 space-y-8">
        <div class="flex items-center justify-center gap-4 md:justify-end">
          <p class="hidden text-6xl font-black text-slate-800 lg:block">
            BACKEND
          </p>

          <TechIcon icon="si-csharp" title="C#" class="text-purple-600" />
          <TechIcon icon="vi-file-type-python" title="Python" />
          <TechIcon
            icon="vi-file-type-js-official"
            class="text-stone-800"
            title="Javascript"
          />
          <TechIcon icon="vi-file-type-typescript-official" title="Typescipt" />
        </div>
        <div
          class="flex items-center justify-center gap-4 md:-mr-8 md:justify-end"
        >
          <p class="hidden text-6xl font-black text-slate-800 lg:block">DB</p>

          <TechIcon icon="vi-file-type-pgsql" title="PostgreSQL" />
          <TechIcon icon="vi-file-type-mongo" title="MongoDB" />
          <TechIcon icon="co-redis" class="text-red-500" title="Redis" />
        </div>
        <div
          class="flex items-center justify-center gap-4 md:-mr-8 md:justify-end"
        >
          <p class="hidden text-6xl font-black text-slate-800 lg:block">
            FRONTEND
          </p>
          <TechIcon icon="vi-file-type-reactjs" title="React" />
          <TechIcon icon="vi-file-type-vue" title="Vue" />
          <TechIcon icon="vi-file-type-angular" title="Angular" />
          <TechIcon
            icon="md-extension-sharp"
            class="text-slate-300"
            title="Browser Extensions"
          />
        </div>
        <div class="flex items-center justify-center gap-4 md:justify-end">
          <TechIcon icon="vi-file-type-html" title="HTML" />
          <TechIcon icon="vi-file-type-css" title="CSS" />
          <TechIcon icon="vi-file-type-tailwind" title="Tailwind" />
          <TechIcon icon="si-mui" class="text-blue-600" title="Material UI" />
          <TechIcon icon="vi-file-type-sass" title="SASS" />
        </div>
        <div class="flex items-center justify-center gap-4 md:justify-end">
          <p class="hidden text-6xl font-black text-slate-800 lg:block">
            DEVOPS
          </p>
          <TechIcon
            icon="io-logo-docker"
            class="text-blue-500"
            title="Docker"
          />
          <TechIcon icon="fa-aws" class="text-orange-500" title="AWS" />
        </div>
      </div>
    </div>
  </div>
</template>
