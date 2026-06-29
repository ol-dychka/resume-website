<template>
  <v-icon
    :name="icon"
    scale="2.5"
    :class="['z-10', className]"
    :title="title"
  />
</template>

<script setup>
defineProps({
  icon: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: "",
  },
  className: {
    type: String,
    default: "",
  },
});
</script>
