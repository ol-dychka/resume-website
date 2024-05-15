<script setup>
import ProjectItem from "./ProjectItem.vue";
import ProjectItemAltered from "./ProjectItemAltered.vue";

const links = {
  trittico: {
    preview: "https://trittico-clone.pages.dev/",
    github: "https://github.com/ol-dychka/trittico-clone",
  },
  ortohol: {
    preview: "http://bogkrovi-env.eba-gk3zcthi.us-east-2.elasticbeanstalk.com/",
    github: "https://github.com/ol-dychka/Ortohol-ecommerce",
  },
};

const images = {
  trittico: "../assets/trittico.png",
  ortohol: "../assets/ortohol.png",
};
</script>

<template>
  <div class="px-32 py-12 space-y-16" id="projects">
    <p class="text-7xl text-center font-bold text-teal-800">My Projects</p>
    <ProjectItem
      title="Orthopedics Ecommerce Website"
      text="This website was developed for an e-commerce business. It features pagination, login and payment w/ Stripe. Please note that it is still in development and thus some features may be absent or unfinished."
      :image="images.ortohol"
      :links="links.ortohol"
    />
    <ProjectItemAltered
      title="Bicycle Website Landing Page"
      text="This website is a replica of Columbus Trittico website that was featured on Awwwards for its design. I maintained the same design style using React and Tailwind."
      :image="images.trittico"
      :links="links.trittico"
    />
  </div>
</template>
