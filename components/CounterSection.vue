<script lang="ts" setup>
import { useMainStore } from "#imports";

const store = useMainStore();
const selectedLangText = computed<object>(() => store.selectedLangText);

</script>
<template>
  <div class="counter-section-wrapper">
    <div class="list-container" v-for="(item, key) in selectedLangText['count_block']" :key="key">
      <p>{{ item.title }}</p>
      <span>{{ item.count }}</span>
    </div>
  </div>
</template>
<style lang="scss">
.counter-section-wrapper {
  background-color: rgba(#09C, .2);
  border-radius: 20px;
  max-width: 60%;
  margin: 0 auto;
  display: flex;
  justify-content: space-evenly;
  padding: 40px 0;
  text-align: center;

  .list-container {
    p {
      color: #09C;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.36px;
      margin-bottom: 5px;
    }

    span {
      color: #09C;
      font-size: 46px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: -0.69px;
    }
  }
}

@media (max-width: 1034px) {
  .counter-section-wrapper {
    max-width: 100%;
  }
}

@media (max-width: 640px) {
  .counter-section-wrapper {
    display: none;
  }
}
</style>
