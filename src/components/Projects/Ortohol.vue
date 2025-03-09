<script setup></script>

<template>
  <div class="flex flex-wrap items-start justify-between gap-12 lg:flex-nowrap">
    <img
      src="@/assets/ortohol.png"
      class="h-auto w-[500px] rounded-lg object-contain"
    />

    <div class="flex flex-col justify-between gap-6">
      <div>
        <p class="text-3xl">Orthopedics Ecommerce Website</p>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          [Currently Inactive] This website was developed for an e-commerce
          business. Features: Pagination, Search, Filtering, Login, Payment w/
          Stripe.
        </p>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          Backend: C# with layered architecture, PostgreSQL, Docker. Frontend:
          React, Typescript, MobX, Material UI
        </p>
      </div>
      <div class="flex flex-wrap gap-x-8 gap-y-2">
        <a
          href="https://ortohol-latest.onrender.com/"
          target="_blank"
          class="duration-200 hover:text-teal-800"
          >Preview</a
        >
        <a
          href="https://github.com/ol-dychka/Ortohol-ecommerce"
          target="_blank"
          class="duration-200 hover:text-teal-800"
        >
          <v-icon name="bi-github" scale="1.5" />
        </a>
      </div>
    </div>
  </div>
</template>
