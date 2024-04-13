<script lang="ts" setup>
import { useMainStore } from "#imports";

const store = useMainStore();
const selectedLangText = computed<object>(() => store.selectedLangText);
console.log(selectedLangText.value['main_block']);
setTimeout(() => {
  console.log(selectedLangText.value['main_block']);
}, 500);
</script>
<template>
  <div class="main-hero-section">
    <div class="text-composition">
      <div class="logo-name">
        <p>{{ selectedLangText['main_block']['name_company'] }}</p>
      </div>
      <div class="text-content">
        <h1 class="h1">{{ selectedLangText['main_block']['header']  }}</h1>
        <p>{{ selectedLangText['main_block']['text']  }}</p>
        <button class="call-action-btn">{{ selectedLangText['main_block']['button']  }}</button>
      </div>
    </div>
    <div class="icon-down">
      <svg xmlns="http://www.w3.org/2000/svg" width="69" height="35" viewBox="0 0 69 35" fill="none">
        <path d="M1 1L34.5 34L68 1" stroke="white"/>
      </svg>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.main-hero-section {
  max-width: 100%;
  width: 100%;
  min-height: 750px;
  background-size: cover;
  background-image: url("/assets/main-bg.jpg");
  background-position: center;
  box-sizing: border-box;
  overflow: hidden;
  position: relative;

  .icon-down {
    position: absolute;
    bottom: 0%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
  }
}

.text-composition {
  position: relative;
  padding-top: 260px;

  box-sizing: border-box;
  max-width: 100%;
  overflow: hidden;

  .text-composition {
    max-width: 100%;
    width: 100%;
    box-sizing: border-box;
    color: #fff;
  }

  .text-content {
    max-width: 100%;
    box-sizing: border-box;
    width: 60%;
    padding-left: 70px;
    color: #fff;

    .call-action-btn {
      width: 250px;
      height: 40px;
      border-radius: 10px;
      background-color: #09C;
      border: none;
      outline: none;
      cursor: pointer;
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      transition: .3s ease all;

      &:hover {
        background-color: rgba(#09C, .9);
      }
    }

    .h1 {
      font-size: 64px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.96px;
      margin-bottom: 20px;
    }

    p {
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      letter-spacing: -0.3px;
      margin-bottom: 20px;
    }
  }

  .logo-name {
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    letter-spacing: -0.3px;
    color: #fff;
    padding-left: 70px;
    width: 40%;
    margin-bottom: 20px;
  }
}

@media (max-width: 480px) {
  .text-composition {
    padding-top: 184px;
  }
  .text-composition .text-content {
    .h1 {
      font-size: 32px;
    }

    p {
      font-size: 12px;
    }
  }
}
</style>
