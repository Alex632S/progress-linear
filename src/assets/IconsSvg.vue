<template>
  <component :is="icon" :width="widthSvg" :height="heightSvg" />
</template>

<script setup lang="ts">
import { defineAsyncComponent } from "vue";

const props = defineProps({
  nameSvg: {
    required: true,
    type: String,
  },
  widthSvg: {
    required: true,
    type: String,
  },
  heightSvg: {
    required: true,
    type: String,
  },
});

const icon = defineAsyncComponent({
  loader: () => import(`./svg/${props.nameSvg}.svg?component`),
});
</script>
