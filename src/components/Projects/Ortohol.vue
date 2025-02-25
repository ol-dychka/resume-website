<script setup></script>

<template>
  <div class="flex justify-between gap-12">
    <img src="@/assets/ortohol.png" class="h-auto w-[500px] rounded-lg" />

    <div class="flex flex-col justify-between">
      <div>
        <p class="text-3xl">Orthopedics Ecommerce Website</p>
        <p class="font-normal mt-4">
          [Currently Inactive] This website was developed for an e-commerce
          business. Features: Pagination, Search, Filtering, Login, Payment w/
          Stripe. Please note that up-to-day code on Github and published
          version might have a few differences.
        </p>
        <p class="font-normal mt-4">
          Backend: C# with layered architecture, PostgreSQL, Docker. Frontend:
          React, Typescript, MobX, Material UI
        </p>
      </div>
      <div class="flex gap-8">
        <a
          href="https://ortohol-latest.onrender.com/"
          target="_blank"
          class="hover:text-teal-800 duration-200"
          >Preview</a
        >
        <a
          href="https://github.com/ol-dychka/Ortohol-ecommerce"
          target="_blank"
          class="hover:text-teal-800 duration-200"
        >
          <v-icon name="bi-github" scale="1.5" />
        </a>
      </div>
    </div>
  </div>
</template>
