<script lang="ts" setup>
interface Props {
  percentage: number
}

const props = defineProps<Props>()
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.progress" :style="{ width: `${percentage}%` }" />
  </div>
</template>

<style module>
.root,
.progress {
  height: 11px;
  border-radius: 20px;
}

.root {
  position: relative;
  width: 100%;
  background-color: #f2f3f33b;
}

.progress {
  position: absolute;
  left: 0;
  background-color: #3bde7c;
  transition: width 0.3s;
}
</style>
