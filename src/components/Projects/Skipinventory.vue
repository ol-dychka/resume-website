<script setup></script>

<template>
  <div
    class="flex flex-wrap items-start justify-between gap-12 lg:flex-row-reverse lg:flex-nowrap"
  >
    <img
      src="@/assets/skipinventory.png"
      class="h-auto w-[500px] rounded-lg object-contain"
    />

    <div class="flex flex-col justify-between gap-6">
      <div class="space-y-4">
        <p class="text-3xl text-teal-600">
          Inventory Tracking & AI Sale Forecasting App
        </p>
        <div
          class="flex flex-wrap items-center gap-x-8 gap-y-2 text-2xl text-slate-300"
        >
          <a
            href="https://skipinventory.netlify.app"
            target="_blank"
            class="underline duration-200 hover:text-teal-600"
            >Live Demo</a
          >
          <a
            href="https://github.com/ol-dychka/skipinventory"
            target="_blank"
            class="duration-200 hover:text-teal-600"
          >
            <v-icon name="bi-github" scale="2" />
          </a>
        </div>
        <div class="mt-4 flex flex-wrap gap-x-8 text-slate-500">
          <p>.NET C#</p>
          <p>Angular</p>
          <p>Typescript</p>
          <p>Python</p>
          <p>Tailwind</p>
          <p>PostgreSQL</p>
          <p>Redis</p>
          <p>SignalR</p>
          <p>Docker</p>
          <p>Machine Learning</p>
        </div>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          Inventory tracking and sale forecasting application for a small
          company. Features Organization: Owner/Manager/Employee structure with
          regulated rights and permissions. Features live chat and notifications
          via SignalR. Security measured include checking relevance of the token
          via Redis database.
        </p>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          Features manual sale record submission, inventory management and model
          training on past sales data. Forecasting is done by a separate Python
          service.
        </p>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          Still in development. The webiste can take a few minutes to load.
        </p>
      </div>
    </div>
  </div>
</template>
