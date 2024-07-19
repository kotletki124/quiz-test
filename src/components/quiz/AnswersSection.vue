<script lang="ts" setup>
import IconEllipse from '@/components/icons/IconEllipse.vue'
import type { AnswerType } from './models/question.model'
import type { Answer } from './models/answer.model'

defineEmits(['select'])

interface Props {
  answers: Answer[]
  answerType: AnswerType
  selectedAnswer?: Answer
}

const props = defineProps<Props>()

const getItemBgColor = (color?: string) => {
  if (props.answerType === 'color') return color
  if (props.answerType === 'number') return '#ffffff'
}
</script>

<template>
  <div
    :class="{
      [$style.stringAnswerContainer]: answerType === 'string',
      [$style.colorAnswerContainer]: answerType === 'color',
      [$style.numberAnswerContainer]: answerType === 'number'
    }"
  >
    <div
      v-for="answer of answers"
      :key="answer.id"
      :class="{
        [$style.stringAnswerItem]: answerType === 'string',
        [$style.colorAnswerItem]: answerType === 'color',
        [$style.numberAnswerItem]: answerType === 'number',
        [$style.selected]: answer.id === selectedAnswer?.id
      }"
      :style="{ 'background-color': getItemBgColor(answer.value) }"
      @click="$emit('select', answer)"
    >
      <IconEllipse
        v-if="answerType === 'string'"
        v-bind="
          answer.id === selectedAnswer?.id && {
            fill: '#2950C2',
            color: '#272727'
          }
        "
        style="flex-shrink: 0"
      />
      <span
        v-if="answerType !== 'color'"
        :class="{
          [$style.stringAnswerText]: answerType === 'string',
          [$style.numberAnswerText]: answerType === 'number'
        }"
        >{{ answer.value }}</span
      >
    </div>
  </div>
</template>

<style module>
.stringAnswerContainer {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
}

.stringAnswerItem {
  display: flex;
  align-items: center;
  gap: 20px;
  min-height: 50px;
  color: #ffffff;
  background-color: #f2f3f326;
  padding: 10px 20px;
  cursor: pointer;
}

.stringAnswerItem.selected {
  background-color: #ffc700;
  color: #272727;
  cursor: default;
}

.stringAnswerText {
  font-family: PT Serif;
  font-size: 18px;
  line-height: 20px;
  letter-spacing: 0.05em;
  text-align: left;
}

.colorAnswerContainer {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 10px;
  max-width: 245px;
}

.colorAnswerItem {
  width: 75px;
  height: 75px;
  border: 6px solid transparent;
  cursor: pointer;
}

.colorAnswerItem.selected,
.numberAnswerItem.selected {
  border-color: #ffc700;
  cursor: default;
}

.numberAnswerContainer {
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.numberAnswerItem {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 41px;
  height: 41px;
  color: #0d0c11;
  border: 6px solid transparent;
  cursor: pointer;
}

.numberAnswerText {
  font-family: PT Serif;
  font-size: 20px;
  line-height: 49px;
  text-align: center;
}
</style>
