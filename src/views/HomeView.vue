<script lang="ts" setup>
import ButtonBasic from '@/components/ButtonBasic.vue'
import IconButton from '@/components/IconButton.vue'
import IconArrowTop from '@/components/icons/IconArrowTop.vue'
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.content">
      <div :class="$style.wrapper">
        <div :class="$style.preHeader">Пройдите точный и быстрый</div>
        <h1 :class="$style.header">тест на определение IQ</h1>
        <img src="/brain.png" />
        <ButtonBasic as="link" to="/test" variant="primary">Пройти тест</ButtonBasic>
        <div :class="$style.caption">
          <div :class="$style.strong">и получите рекомендации по развитию своего интеллекта</div>
          и улучшению финансового благосостояния и личной жизни
        </div>
        <div role="button" @click="$router.push('/info')">
          <IconButton style="background-color: #ffffff; margin: auto">
            <IconArrowTop />
          </IconButton>
          <RouterLink to="/" :class="$style.link">Подробнее</RouterLink>
        </div>
      </div>
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
}

.content {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 46px);
  background: url('/bg.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  color: white;
  padding: 20px 10px;
}

.wrapper {
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  max-width: 80%;
  text-align: center;
}

.preHeader {
  font-family: PT Serif;
  font-size: 18px;
  line-height: 23.85px;
  letter-spacing: 0.05em;
}

.header {
  font-family: Yeseva One;
  font-size: 30px;
  line-height: 34.65px;
  letter-spacing: 0.03em;
  color: #ffc700;
  text-transform: uppercase;
  box-shadow: 0px 4px 4px 0px #00000040;
}

.caption {
  font-family: PT Serif;
  font-size: 15px;
  line-height: 19px;
  letter-spacing: 0.05em;
}

.caption > .strong {
  color: #ffc700;
}

.link {
  font-family: PT Serif;
  font-size: 8px;
  line-height: 10.6px;
  letter-spacing: 0.05em;
  text-align: center;
  text-decoration: none;
  color: #ffffff;
}
</style>
