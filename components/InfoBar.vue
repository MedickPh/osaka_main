<script lang="ts" setup>

import { useMainStore } from "#imports";

const store = useMainStore()
const allSiteText = computed<object>(() => store.allSiteText);
const currentLanguage = computed<string>(() => store.currentLanguage);

const japanTime = ref('');
const updateTime = () => {
  const japanDate = new Date().toLocaleString('ja-JP', { timeZone: 'Asia/Tokyo' });
  japanTime.value = japanDate;
  requestAnimationFrame(updateTime);
};
onMounted(updateTime);



</script>
<template>
  <div class="info-bar">
    <div class="container-wrapper">
      <div class="info-dollar-container">
        <span>USD/JPY - 1$ = {{ allSiteText['currency'] }}¥</span>
      </div>
      <div class="current-time-container">
        <span v-if="currentLanguage === 'Ja'">日本時間 {{ japanTime  }}</span>
        <span v-else>Japan Standard Time {{ japanTime  }}</span>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.info-bar {
  max-width: 100vw;
  width: 100%;
  padding: 10px var(--default-padding);
  background: var(--main-color);

  .container-wrapper {
    max-width: 100%;
    width: 100%;
    display: flex;
    column-gap: 50px;
    color: #fff;

    .info-dollar-container {
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }

    .current-time-container {
      font-size: 13px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}
</style>
