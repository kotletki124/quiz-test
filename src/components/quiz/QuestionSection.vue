<script lang="ts" setup>
import AnswersSection from './AnswersSection.vue'
import { useQuizStore } from '@/stores/quiz-store'

const quizStore = useQuizStore()
</script>

<template>
  <div>
    <div :class="$style.questionText">{{ quizStore.currentQuestion.value }}</div>
    <img v-if="!!quizStore.currentQuestion.asset" :src="quizStore.currentQuestion.asset" />
    <AnswersSection
      :answers="quizStore.currentQuestion.answers"
      :answerType="quizStore.currentQuestion.answerType"
      :selectedAnswer="quizStore.currentAnswer"
      @select="quizStore.selectAnswer"
    />
  </div>
</template>

<style module>
.questionText {
  font-family: PT Serif;
  font-size: 20px;
  line-height: 26.5px;
  letter-spacing: 0.05em;
  text-align: center;
  color: white;
}
</style>
