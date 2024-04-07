<script setup>
import ProjectItem from "./ProjectItem.vue";

const links = {
  trittico: {
    preview: "https://trittico-clone.pages.dev/",
    github: "https://github.com/ol-dychka/trittico-clone",
  },
};

const images = {
  trittico: "../assets/trittico.png",
};
</script>

<template>
  <div class="px-32 py-12 space-y-16">
    <p class="text-7xl text-center font-bold">My Projects</p>
    <ProjectItem
      title="Bicycle Website Landing Page"
      text="This website is a replica of Columbus Trittico website that was featured on Awwwards for its design. I maintained the same design style using React and Tailwind."
      :image="images.trittico"
      :links="links.trittico"
      :altered="true"
    />
  </div>
</template>
