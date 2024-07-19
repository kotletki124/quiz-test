import type { Question } from './stores/models/question.model'

const questions: Question[] = [
  {
    id: 1,
    value: 'Ваш пол:',
    answerType: 'string',
    answers: [
      { id: 1, value: 'Мужчина' },
      { id: 2, value: 'Женщина' }
    ]
  },
  {
    id: 2,
    value: 'Укажите ваш возраст:',
    answerType: 'string',
    answers: [
      { id: 1, value: 'До 18' },
      { id: 2, value: 'От 18 до 28' },
      { id: 3, value: 'От 29 до 35' },
      { id: 4, value: 'От 36' }
    ]
  },
  {
    id: 3,
    value: 'Выберите лишнее:',
    answerType: 'string',
    answers: [
      { id: 1, value: 'Дом' },
      { id: 2, value: 'Шалаш' },
      { id: 3, value: 'Бунгало' },
      { id: 4, value: 'Скамейка' },
      { id: 5, value: 'Хижина' }
    ]
  },
  {
    id: 4,
    value: 'Продолжите числовой ряд: 18 20 24 32',
    answerType: 'string',
    answers: [
      { id: 1, value: '62' },
      { id: 2, value: '48' },
      { id: 3, value: '74' },
      { id: 4, value: '57' },
      { id: 5, value: '60' },
      { id: 6, value: '77' }
    ]
  },
  {
    id: 5,
    value: 'Выберите цвет, который сейчас наиболее вам приятен:',
    answerType: 'color',
    answers: [
      { id: 1, value: '#808080' },
      { id: 2, value: '#0000FF' },
      { id: 3, value: '#00FF00' },
      { id: 4, value: '#FF0000' },
      { id: 5, value: '#FFFF00' },
      { id: 6, value: '#A52A2A' },
      { id: 7, value: '#000000' },
      { id: 8, value: '#800080' },
      { id: 9, value: '#00FFFF' }
    ]
  },
  {
    id: 6,
    value: 'Отдохните пару секунд, еще раз выберите цвет, который сейчас наиболее вам приятен:',
    answerType: 'color',
    answers: [
      { id: 1, value: '#808080' },
      { id: 2, value: '#0000FF' },
      { id: 3, value: '#00FF00' },
      { id: 4, value: '#FF0000' },
      { id: 5, value: '#FFFF00' },
      { id: 6, value: '#A52A2A' },
      { id: 7, value: '#000000' },
      { id: 8, value: '#800080' },
      { id: 9, value: '#00FFFF' }
    ]
  },
  {
    id: 7,
    value: 'Какой из городов лишний?',
    answerType: 'string',
    answers: [
      { id: 1, value: 'Вашингтон' },
      { id: 2, value: 'Лондон' },
      { id: 3, value: 'Париж' },
      { id: 4, value: 'Нью-Йорк' },
      { id: 5, value: 'Москва' },
      { id: 6, value: 'Оттава' }
    ]
  },
  {
    id: 8,
    value: 'Выберите правильную фигуру из четырёх пронумерованных.',
    answerType: 'number',
    answers: [
      { id: 1, value: '1' },
      { id: 2, value: '2' },
      { id: 3, value: '3' },
      { id: 4, value: '4' }
    ],
    asset: '/asset_8.png'
  },
  {
    id: 9,
    value: 'Вам привычнее и важнее:',
    answerType: 'string',
    answers: [
      { id: 1, value: 'Наслаждаться каждой минутой проведенного времени' },
      { id: 2, value: 'Быть устремленными мыслями в будущее' },
      { id: 3, value: 'Учитывать в ежедневной практике прошлый опыт' }
    ]
  },
  {
    id: 10,
    value: 'Какое определение, по-Вашему, больше подходит к этому геометрическому изображению:',
    answerType: 'string',
    answers: [
      { id: 1, value: 'Оно остроконечное' },
      { id: 2, value: 'Оно устойчиво' },
      { id: 3, value: 'Оно находится в состоянии равновесия' }
    ],
    asset: '/asset_10.png'
  },
  {
    id: 11,
    value: 'Вставьте подходящее число',
    answerType: 'number',
    answers: [
      { id: 1, value: '34' },
      { id: 2, value: '36' },
      { id: 3, value: '53' },
      { id: 4, value: '44' },
      { id: 5, value: '66' },
      { id: 6, value: '42' }
    ],
    asset: '/asset_11.png'
  }
]

export default questions
