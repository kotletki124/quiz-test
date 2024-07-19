import type { QuizAnswersDto } from './models/quiz-answers-dto.model'
import type { QuizResult } from './models/quiz-result.model'

const sendAnswers = (
  result: QuizAnswersDto
): Promise<{ status: 'success' | 'error'; token?: string }> => {
  return new Promise((resolve) => {
    const randomDelay = Math.floor(Math.random() * 5000) + 3000
    setTimeout(() => {
      resolve({ status: 'success', token: 'sample_token123' })
    }, randomDelay)
  })
}

const getResultByToken = (token: string): Promise<QuizResult> => {
  return fetch('https://swapi.dev/api/people/1/')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText)
      }
      return response.json()
    })
    .catch((error) => {
      console.error('There was a problem with the fetch operation:', error)
    })
}

export { sendAnswers, getResultByToken }
