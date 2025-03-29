<script setup></script>

<template>
  <div class="flex flex-wrap items-start justify-between gap-12 lg:flex-nowrap">
    <img
      src="@/assets/ortohol.png"
      class="h-auto w-[500px] rounded-lg object-contain"
    />

    <div class="flex flex-col justify-between gap-6">
      <div class="space-y-4">
        <p class="text-3xl">Orthopedics Ecommerce Website</p>
        <div
          class="flex flex-wrap items-center gap-x-8 gap-y-2 text-2xl text-teal-800 underline"
        >
          <a
            href="https://ortohol.onrender.com/"
            target="_blank"
            class="duration-200 hover:text-teal-600"
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
        <p class="mt-4 text-lg font-normal sm:text-xl">
          This website was developed for an e-commerce orthopedics business.
          Features login, payment w/ Stripe, pagination, filtering and search.
        </p>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          On frontend I used React with Typescript, MobX for storage and
          Material UI for interface.
        </p>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          Backend features .NET C# with layered architecture:<br />API (responds
          to requests from front-end)<br />
          Application (processes requests coming from API)<br />Domain (defines
          all object types used in application)<br />Infrastructure (interacts
          with image hosting service)<br />Persistence (configures relationships
          in a database).
        </p>
        <p class="mt-4 text-lg font-normal sm:text-xl">
          Database used is PostgreSQL. Project is built using Docker, image is
          hosted on a server.
        </p>
      </div>
    </div>
  </div>
</template>
