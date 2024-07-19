import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import questions from '@/questions'
import { useAsync } from '@/composables/useAsync'
import { sendAnswers as sendAnswersAPI, getResultByToken } from './api-client'
import type { Answer } from './models/answer.model'

export const useQuizStore = defineStore('quiz', () => {
  const quizStarted = ref(false)
  const quizFinished = ref(false)
  const answers = ref({})
  const currQuestionIndex = ref<number>()
  const currentAnswer = ref<Answer | null>()
  const resultExpiresAt = ref<number | null>(null)

  const sendAnswersCb = () => sendAnswersAPI(answers.value)
  const {
    data: answersAnalyzed,
    loading: analyzingAnswers,
    execute: sendAnswers
  } = useAsync(sendAnswersCb)

  const getResultCb = () => getResultByToken(answersAnalyzed.value?.token)
  const { data: result, loading: fetchingResult, execute: getResult } = useAsync(getResultCb)

  const currentQuestion = computed(() => questions[currQuestionIndex.value])
  const isCurrQuestionFirst = computed(() => currQuestionIndex.value === 0)
  const isCurrQuestionLast = computed(() => currQuestionIndex.value === questions.length - 1)
  const progress = computed(
    () => ((Object.values(answers.value).filter((a) => !!a).length + 1) / questions.length) * 100
  )

  watch(progress, (newValue) => {
    if (newValue > 100) {
      sendAnswers()
    }
  })

  watch(
    () => currentQuestion.value,
    () => {
      selectAnswer()
    }
  )

  watch(
    () => answersAnalyzed.value,
    (newVal) => {
      if (newVal?.status === 'success') {
        quizStarted.value = false
        quizFinished.value = true
        resultExpiresAt.value = new Date().getTime() + 30000
      }
    }
  )

  const startQuiz = () => {
    quizFinished.value = false
    quizStarted.value = true
    currQuestionIndex.value = 0
    answersAnalyzed.value = null
    result.value = null
    resultExpiresAt.value = null
    answers.value = {}
  }

  const findPrevAnswerByQuestionId = (id: number) => {
    const answerId = answers.value[id]
    if (answerId) return questions.find((q) => q.id === id)?.answers.find((a) => a.id === answerId)
    return null
  }

  const selectAnswer = (answer?: Answer) => {
    if (answer) {
      currentAnswer.value = answer
    } else {
      const questionId = currentQuestion.value.id
      currentAnswer.value = findPrevAnswerByQuestionId(questionId)
    }
  }

  const answerQuestion = () => {
    Object.assign(answers.value, { [currentQuestion.value.id]: currentAnswer.value?.id })
    if (currQuestionIndex.value < questions.length - 1) currQuestionIndex.value++
  }

  const toPrevQuestion = () => {
    currQuestionIndex.value--
  }

  return {
    quizStarted,
    quizFinished,
    currentQuestion,
    isCurrQuestionFirst,
    isCurrQuestionLast,
    currentAnswer,
    progress,
    resultExpiresAt,
    answers,
    answersAnalyzed,
    analyzingAnswers,
    result,
    fetchingResult,
    getResult,
    startQuiz,
    selectAnswer,
    answerQuestion,
    toPrevQuestion,
    sendAnswers
  }
})
