<script lang="ts" setup>
import ButtonBasic from '@/components/ButtonBasic.vue'
import QuizComponent from '@/components/quiz/QuizComponent.vue'
import ProccessingAnswers from '@/components/quiz/ProccessingAnswers.vue'
import QuizResult from '@/components/quiz/QuizResult.vue'
import PageTransition from '@/components/PageTransition.vue'
import { useQuizStore } from '@/stores/quiz-store'

const quizStore = useQuizStore()
</script>

<template>
  <div
    :class="$style.root"
    v-bind="quizStore.quizStarted && { style: { 'background-image': 'url(/bg.png)' } }"
  >
    <div :class="$style.content">
      <PageTransition>
        <QuizComponent
          v-if="quizStore.quizStarted && !quizStore.analyzingAnswers"
          :class="$style.wrapper"
        />

        <ProccessingAnswers v-else-if="quizStore.analyzingAnswers" :class="$style.wrapper" />

        <QuizResult
          v-else-if="quizStore.quizFinished"
          :class="$style.wrapper"
          style="align-self: flex-start"
        />

        <div v-else :class="$style.wrapper">
          <div :class="$style.textBlock">
            Прохождение теста займет у вас не более <strong>12 минут</strong>, а его
            <span style="color: white">результаты</span> вы сможете
            <strong>использовать всю жизнь.</strong>
          </div>

          <div :class="$style.card">
            Профессиональная интерпретация и детально
            <strong>проработанные рекомендации</strong> позволят вам качественно
            <strong>изменить все аспекты своей жизни:</strong> от финансового до любовного.
          </div>

          <ButtonBasic as="button" variant="secondary" @click="quizStore.startQuiz">
            Начать тест
          </ButtonBasic>
        </div>
      </PageTransition>
    </div>
  </div>
</template>

<style module>
.root {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 46px);
  background: url('/bg_lightning.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
}

.content {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 46px);
  width: 80%;
  min-width: 320px;
  max-width: 600px;
  padding: 40px 0 100px;
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

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 100%;
  text-align: center;
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
@/stores/quiz-store
