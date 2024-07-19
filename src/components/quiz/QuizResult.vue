<script lang="ts" setup>
import ButtonBasic from '@/components/ButtonBasic.vue'
import IconCall from '@/components/icons/IconCall.vue'
import PageTransition from '@/components/PageTransition.vue'
import { VueSpinner } from 'vue3-spinners'
import { useQuizStore } from '@/stores/quiz-store'
import { ref, watch, computed, onMounted, onBeforeUnmount } from 'vue'

const quizStore = useQuizStore()

const timerValue = ref(quizStore.resultExpiresAt - new Date().getTime())
const timerFormatted = computed(() => {
  const totalSeconds = Math.max(0, Math.floor(timerValue.value / 1000))
  const minutes = String(Math.floor(totalSeconds / 60)).padStart(2, '0')
  const seconds = String(totalSeconds % 60).padStart(2, '0')
  return `${minutes}:${seconds}`
})
let timerExpired = ref(timerValue.value <= 0)
let intervalId: NodeJS.Timeout

onMounted(() => {
  intervalId = setInterval(() => {
    timerValue.value = quizStore.resultExpiresAt - new Date().getTime()
    if (timerValue.value <= 0) {
      clearInterval(intervalId)
      timerExpired.value = true
    }
  }, 1000)
})

watch(
  () => quizStore.result,
  (newVal) => {
    if (newVal) clearInterval(intervalId)
  }
)

onBeforeUnmount(() => {
  clearInterval(intervalId)
})
</script>

<template>
  <div>
    <div :class="$style.text1">Ваш результат рассчитан:</div>
    <div :class="$style.text2">
      <strong>Вы относитесь к 3%</strong> респондентов, чей уровень интеллекта более чем на 15
      пунктов отличается от среднего в большую или меньшую сторону!
    </div>
    <div :class="$style.textGreen1">Скорее получите свой результат!</div>
    <div :class="$style.caption">
      В целях защиты персональных данных результат теста, их подробная интерпретация и рекомендации
      доступны в виде голосового сообщения по звонку с вашего мобильного телефона
    </div>

    <PageTransition>
      <div v-if="!quizStore.result && !timerExpired" :class="$style.textGreen2">
        Звоните скорее, запись доступна всего
        <span :class="$style.timer">{{ timerFormatted }}</span> минут
      </div>
      <div v-if="!quizStore.result && timerExpired" :class="$style.textGreen2">
        Запись более недоступна
      </div>
    </PageTransition>

    <PageTransition>
      <button
        v-if="!quizStore.result && !timerExpired"
        :class="$style.redBtn"
        @click="quizStore.getResult"
      >
        <div v-if="quizStore.fetchingResult" style="width: fit-content; margin: auto">
          <VueSpinner :size="35" color="white" />
        </div>
        <div v-else :class="$style.redBtnContent">
          <IconCall />
          <span>Позвонить и прослушать результат</span>
        </div>
      </button>
    </PageTransition>

    <PageTransition>
      <div v-if="quizStore.result" :class="$style.resultTable" style="transition-delay: 500ms">
        <div>Имя:</div>
        <div>{{ quizStore.result.name }}</div>
        <div>Рост:</div>
        <div>{{ quizStore.result.height }}</div>
        <div>Масса:</div>
        <div>{{ quizStore.result.mass }}</div>
        <div>Цвет волос:</div>
        <div>{{ quizStore.result.hair_color }}</div>
        <div>Цвет кожи:</div>
        <div>{{ quizStore.result.skin_color }}</div>
        <div>Цвет глаз:</div>
        <div>{{ quizStore.result.eye_color }}</div>
        <div>Год рождения:</div>
        <div>{{ quizStore.result.birth_year }}</div>
        <div>Пол:</div>
        <div>{{ quizStore.result.gender }}</div>
      </div>
    </PageTransition>

    <ButtonBasic
      as="button"
      variant="primary"
      style="margin-top: 15px"
      @click="quizStore.startQuiz"
    >
      Пройти заново
    </ButtonBasic>
  </div>
</template>

<style module>
.text1 {
  font-family: PT Serif;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: 0.1em;
  text-align: center;
  text-transform: uppercase;
}

.text2 {
  font-family: PT Serif;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
}

.text2 > strong {
  text-decoration: underline;
}

.caption {
  font-family: Roboto;
  font-size: 8px;
  line-height: 14px;
  letter-spacing: 2px;
  text-align: center;
  text-transform: uppercase;
  background-color: #1c2741;
  padding: 10px;
  border-radius: 4px;
}

.textGreen1 {
  font-family: PT Serif;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  color: #3bde7c;
}

.textGreen2 {
  font-family: PT Serif;
  font-size: 11px;
  line-height: 30px;
  letter-spacing: 0.1em;
  text-align: center;
  color: #3bde7c;
}

.timer {
  font-family: PT Serif;
  font-size: 20px;
}

.redBtn {
  width: 100%;
  font-family: Roboto;
  font-size: 15px;
  line-height: 17.58px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #ffffff;
  background-color: #eb1b00;
  padding: 30px 15px;
  border-radius: 5px;
  cursor: pointer;
}

.redBtnContent {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 100%;
}

.resultTable {
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px 20px;
  background-color: #1c2741;
  text-align: left;
  padding: 20px;
  border-radius: 4px;
}
</style>
