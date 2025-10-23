<script setup></script>

<template>
  <div class="flex flex-wrap items-start justify-between gap-12 lg:flex-nowrap">
    <img
      src="@/assets/ortohol.png"
      class="h-auto w-[500px] rounded-lg object-contain"
    />

    <div class="flex flex-col justify-between gap-6">
      <div class="space-y-4">
        <p class="text-3xl text-teal-600">Orthopedics Ecommerce Website</p>
        <div
          class="flex flex-wrap items-center gap-x-8 gap-y-2 text-2xl text-slate-300"
        >
          <a
            href="https://ortohol.onrender.com/"
            target="_blank"
            class="underline duration-200 hover:text-teal-600"
            >Live Demo</a
          >
          <a
            href="https://github.com/ol-dychka/Ortohol-ecommerce"
            target="_blank"
            class="duration-200 hover:text-teal-600"
          >
            <v-icon name="bi-github" scale="2" />
          </a>
        </div>
        <div class="mt-4 flex flex-wrap gap-x-8 text-slate-500">
          <p>.NET C#</p>
          <p>React</p>
          <p>Typescript</p>
          <p>Mobx</p>
          <p>Material UI</p>
          <p>Stripe</p>
          <p>PostgreSQL</p>
          <p>Docker</p>
        </div>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          This website was developed for an e-commerce orthopedics business.
          Features authentication, payments, pagination, filtering, wishlist and
          search.
        </p>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          Backend features layered architecture. Images are hosted on an
          external service.
        </p>
      </div>
    </div>
  </div>
</template>
