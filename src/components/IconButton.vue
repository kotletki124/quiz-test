<template>
  <div role="button" :class="$style.root">
    <slot />
  </div>
</template>

<style module>
.root {
  width: fit-content;
  height: fit-content;
  line-height: 0;
  padding: 5px;
  border-radius: 50%;
}
</style>
