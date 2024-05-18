<script setup>
import { defineProps } from "vue";

const props = defineProps(["title", "text", "image", "links"]);

const getImageUrl = () => {
  return new URL(props.image, import.meta.url);
};
</script>

<template>
  <div class="flex justify-between gap-12">
    <img src="@/assets/ortohol.png" class="h-auto w-[500px] rounded-lg" />

    <div class="flex flex-col justify-between">
      <div>
        <p class="text-3xl">Orthopedics Ecommerce Website</p>
        <p class="font-normal mt-4">
          This website was developed for an e-commerce business. It features
          pagination, login and payment w/ Stripe. Please note that it is still
          in development and thus some features may be absent or unfinished.
        </p>
      </div>
      <div class="flex gap-8">
        <a
          href="http://bogkrovi-env.eba-gk3zcthi.us-east-2.elasticbeanstalk.com/"
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
