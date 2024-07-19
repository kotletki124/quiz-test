<script lang="ts" setup>
interface Props {
  size?: number
  color?: string
  fill?: string
}

withDefaults(defineProps<Props>(), { size: 20, color: '#FFFFFF', fill: 'none' })
</script>

<template>
  <svg
    :width="size"
    :height="size"
    viewBox="0 0 20 20"
    :fill="fill"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="9.5" :stroke="color" />
  </svg>
</template>
