<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import IconButton from '@/components/IconButton.vue'
import IconClose from '@/components/icons/IconClose.vue'

const emit = defineEmits(['close'])

interface Props {
  show: boolean
}

const props = defineProps<Props>()

const route = useRoute()

const transitionName = computed(() => (props.show ? 'slide-right' : 'slide-left'))
</script>

<template>
  <div
    :class="$style.root"
    :style="{ 'pointer-events': `${show ? 'all' : 'none'}` }"
    @click="emit('close')"
  >
    <Transition :name="transitionName" mode="out-in">
      <div v-if="show" :class="$style.content" @click.stop>
        <IconButton :class="$style.closeBtn" @click="emit('close')">
          <IconClose />
        </IconButton>

        <nav :class="$style.nav">
          <RouterLink :class="[$style.navLink, { [$style.active]: route.path === '/' }]" to="/">
            Главная
          </RouterLink>
          <RouterLink
            :class="[$style.navLink, { [$style.active]: route.path === '/info' }]"
            to="/info"
          >
            Информация о тесте
          </RouterLink>
          <RouterLink
            :class="[$style.navLink, { [$style.active]: route.path === '/test' }]"
            to="/test"
          >
            пройти тест
          </RouterLink>
        </nav>
      </div>
    </Transition>
  </div>
</template>

<style module>
.root {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  pointer-events: none;
}

.content {
  position: fixed;
  background-color: #181818;
  width: 100%;
  max-width: 375px;
  height: 100%;
  color: white;
  pointer-events: all;
  padding: 100px 0 0 50px;
}

.closeBtn {
  position: absolute;
  top: 18px;
  right: 18px;
}

.nav {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.navLink {
  font-family: Roboto;
  font-size: 16px;
  line-height: 22px;
  color: #ffffff;
  text-transform: uppercase;
  text-decoration: none;
}

.navLink.active {
  color: #f4ce0c;
  cursor: default;
}

.navLink:hover {
  color: #fff1ad;
}
</style>

<style scoped>
.slide-left-enter-active,
.slide-left-leave-active,
.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease-in-out;
}
.slide-left-enter-from,
.slide-right-leave-to {
  transform: translate(0, 0);
}
.slide-right-enter-from,
.slide-left-leave-to {
  transform: translate(-100%, 0);
}
</style>
