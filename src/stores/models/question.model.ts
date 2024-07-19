import type { Answer } from './answer.model'

export type AnswerType = 'string' | 'number' | 'color'

export interface Question {
  id: number
  value: string
  answerType: AnswerType
  answers: Answer[]
  asset?: string
}
