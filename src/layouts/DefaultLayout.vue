<script lang="ts" setup>
import IconButton from '@/components/IconButton.vue'
import IconMenu from '@/components/icons/IconMenu.vue'
import MenuMobile from '@/components/MenuMobile.vue'
import { ref } from 'vue'
import { useQuizStore } from '@/stores/quiz-store'

const quizStore = useQuizStore()

const showMenu = ref(false)
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.header">
      <IconButton @click="showMenu = true">
        <IconMenu />
      </IconButton>

      <div v-if="quizStore.quizStarted" :class="$style.titleWrapper">
        <img src="/brain.png" :width="40" :height="40" />
        <span :class="$style.title">тест на определение IQ</span>
      </div>

      <div v-if="quizStore.quizFinished" :class="$style.titleWrapper">
        <img src="/brain.png" :width="40" :height="40" />
        <span :class="$style.title">ГОТОВО!</span>
      </div>
    </div>
    <MenuMobile :show="showMenu" style="z-index: 100" @close="showMenu = false" />
    <slot />
  </div>
</template>

<style module>
.root {
  padding-top: 46px;
  background-color: #0a090d;
  width: 100%;
  min-height: 100vh;
}

.header {
  position: fixed;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 46px;
  background-color: #181818;
  padding: 0 15px;
  z-index: 10;
}

.titleWrapper {
  display: flex;
  align-items: center;
  gap: 10px;
}

.title {
  font-family: Yeseva One;
  font-size: 12px;
  line-height: 13.86px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #ffc700;
  text-transform: uppercase;
  margin-top: 5px;
}
</style>
@/stores/quiz-store
