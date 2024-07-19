<script lang="ts" setup>
import ButtonBasic from '@/components/ButtonBasic.vue'
import IconQuotes from '@/components/icons/IconQuotes.vue'
</script>

<template>
  <div :class="$style.root">
    <div :class="$style.quoteBlock">
      <div :class="$style.overlay" />
      <div :class="$style.quoteWrapper">
        <IconQuotes style="align-self: flex-start" />
        <span :class="$style.quote">
          Профессиональный IQ-тест позволяет не только определить коэффициент вашего интеллекта, но
          и выработать список рекомендаций для повышения этого показателя.
        </span>
        <IconQuotes style="align-self: flex-end; transform: rotate(180deg)" />
      </div>
    </div>

    <div :class="$style.infoBlock">
      <div :class="$style.info">
        Также по результатам теста <strong>вы получите</strong> подробные <strong>советы</strong> по
        определению наиболее перспективной
        <strong>для вашего типа интеллекта сферы деятельности</strong>, которая принесет вам
        скорейший финансовый результат.
      </div>
      <img src="/painted_brain.png" />
      <ButtonBasic as="link" to="/test" variant="primary">Пройти тест</ButtonBasic>
    </div>
  </div>
</template>

<style module>
.root {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  min-height: calc(100vh - 46px);
  background-color: #ffffff;
}

.quoteBlock {
  position: relative;
  width: 100%;
  height: 339px;
  background: url('/bg_quote.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0.99;
  background: radial-gradient(
    84.34% 50.29% at 48.75% 49.71%,
    #2950c2 0%,
    rgba(38, 91, 199, 0.96) 40.62%,
    rgba(39, 98, 187, 0) 85.42%
  );
  pointer-events: none;
}

.quoteWrapper {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: center;
  justify-content: center;
  width: 80%;
  max-width: 600px;
  height: 100%;
  z-index: 1;
  margin: auto;
}

.quote {
  font-family: Yeseva One;
  font-size: 18px;
  line-height: 23px;
  letter-spacing: 0.05em;
  text-align: center;
  color: #ffffff;
}

.infoBlock {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  max-width: 600px;
  height: 100%;
  padding-top: 50px;
}

.info {
  font-family: PT Serif;
  font-size: 16px;
  line-height: 24px;
  letter-spacing: 0.05em;
  text-align: left;
  color: #272727;
}

.info > strong {
  font-weight: 700;
  text-transform: uppercase;
}
</style>
