<script lang="ts" setup>
import ButtonBasic from '@/components/ButtonBasic.vue'
import ProgressBar from '@/components/quiz/ProgressBar.vue'
import QuestionSection from '@/components/quiz/QuestionSection.vue'
import { ref, computed } from 'vue'
import { useQuizStore } from '@/stores/quiz-store'

const quizStore = useQuizStore()

const slideRight = ref(false)
const transitionName = computed(() => (slideRight.value ? 'slide-right' : 'slide-left'))

const handleNextClick = () => {
  slideRight.value = false
  quizStore.answerQuestion()
}

const handlePrevClick = () => {
  slideRight.value = true
  quizStore.toPrevQuestion()
}
</script>

<template>
  <div>
    <ProgressBar
      v-if="quizStore.quizStarted"
      :percentage="quizStore.progress"
      :class="$style.progress"
    />

    <Transition :name="transitionName" mode="out-in">
      <QuestionSection :key="quizStore.currentQuestion.id" :class="$style.wrapper" />
    </Transition>

    <div :class="$style.btnSection">
      <ButtonBasic
        as="button"
        variant="secondary"
        :disabled="quizStore.isCurrQuestionFirst"
        @click="handlePrevClick"
      >
        назад
      </ButtonBasic>

      <ButtonBasic
        as="button"
        variant="primary"
        :disabled="!quizStore.currentAnswer"
        @click="handleNextClick"
      >
        {{ quizStore.isCurrQuestionLast ? 'завершить тест' : 'далее' }}
      </ButtonBasic>
    </div>
  </div>
</template>

<style module>
.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
}

.progress {
  position: absolute;
  top: 20px;
}

.btnSection {
  position: absolute;
  bottom: 50px;
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.textBlock {
  max-width: 400px;
  align-self: start;
  font-family: Merriweather;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #e0e0e0;
}

.textBlock > strong {
  color: #ffc700;
}

.card {
  max-width: 760px;
  font-family: Merriweather;
  font-size: 16px;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #181818;
  background-color: #f3f3f2cc;
  padding: 25px 15px;
  border-radius: 20px;
}

.card > strong {
  font-weight: 700;
}
</style>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: 0.15s ease-in-out;
}
.slide-left-enter-from,
.slide-right-leave-to {
  opacity: 0;
  transform: translate(200px, 0);
}
.slide-right-enter-from,
.slide-left-leave-to {
  opacity: 0;
  transform: translate(-200px, 0);
}
</style>
@/stores/quiz-store
