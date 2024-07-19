<script lang="ts" setup>
import { useRouter } from 'vue-router'

const emit = defineEmits(['click'])

type ButtonProps = {
  as: 'button'
  variant: 'primary' | 'secondary'
}

type LinkProps = {
  as: 'link'
  to: string
  variant: 'primary' | 'secondary'
}

type Props = ButtonProps | LinkProps

const props = defineProps<Props>()

const router = useRouter()

const handleClick = () => {
  if (props.as === 'link') router.push(props.to)
  else emit('click')
}
</script>

<template>
  <button :class="$style.btn" @click="handleClick">
    <slot />
  </button>
</template>

<style module>
.btn {
  width: 189px;
  height: 41px;
  border-radius: 20px;
  font-family: Merriweather;
  font-size: 14px;
  line-height: 17.6px;
  letter-spacing: 0.1em;
  color: #0d0c11;
  text-transform: uppercase;
  background: radial-gradient(50% 50% at 50% 50%, #ffc700 0%, #ffc700 100%);
  cursor: pointer;
}

.btn:disabled {
  color: #8e8e8e;
  background: #dadada;
  box-shadow: 0px 4px 10px 0px #00000040 inset;
  cursor: default;
}
</style>
