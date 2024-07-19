<script lang="ts" setup>
import { useQuizStore } from '@/stores/quiz-store'
import { VueSpinner } from 'vue3-spinners'

const quizStore = useQuizStore()
</script>

<template>
  <div>
    <div :class="$style.msg">Обработка результатов</div>
    <VueSpinner :size="65" color="#3BDE7C" />
  </div>
</template>

<style module>
.msg {
  font-family: PT Serif;
  font-size: 23px;
  line-height: 30.47px;
  letter-spacing: 0.05em;
  text-align: center;
  color: white;
}
</style>
