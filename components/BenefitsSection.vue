<script lang="ts" setup>
import { privilegeWork } from "~/data/privilegeWork";
import { ref, onMounted, onUnmounted } from "vue";

const isShowPopUp = ref(false);
const popHeader = ref('');
const popText = ref('')

const showPopUp = (index:number) => {
  isShowPopUp.value = true;
  popHeader.value = privilegeWork.value[index].title_full;
  popText.value = privilegeWork.value[index].text
}

const closePopupOnClickOutside = (event: MouseEvent) => {
  if (isShowPopUp.value === true && !(event.target instanceof Node && document.querySelector(".popUp_text")?.contains(event.target))) {
    isShowPopUp.value = false;
  }
}

onMounted(() => {
  document.addEventListener("click", closePopupOnClickOutside);
});

onUnmounted(() => {
  document.removeEventListener("click", closePopupOnClickOutside);
});
</script>
<template>
  <div class="benefits-wrapper">
    <div class="bg-review-place"></div>
    <div class="top-line-container">
      <div class="content-title">
        <h2 class="h2">Privilege Working With <span>OsakaMotors</span></h2>
      </div>
      <div class="subtitle-wrapper">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed congue interdum ligula a dignissim. Lorem ipsum
          dolor sit amet, consectetur adipiscing elit. Sed lobortis orci elementum egestas lobortis.</p>
      </div>
    </div>
    <div class="benefits">
      <div class="benefit" 
      v-for="(item, index) in privilegeWork" 
      :key="index"
      @click.stop="showPopUp(index)"
      >
        <img :src="`http://13.231.117.234/images/${item.img_url}`" alt="">
        <p>{{ item.title_short }}</p>
      </div>
      <div class="popUp" v-if="isShowPopUp === true">
        <div class="popUp_text">
          <h2>{{ popHeader }}</h2>
          <p>{{ popText }}</p>
          <span>
            <button @click="isShowPopUp = false">Ok</button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">


.benefits-wrapper {
  background: url('/assets/bg.jpeg');
  padding: 120px 0;
  background-size: cover;
  position: relative;
  max-width: 100vw;
  width: 100%;

  .bg-review-place {
    position: absolute;
    max-width: 100vw;
    width: 100%;
    background: #0099CC;
    z-index: 2;
    height: 100%;
    top: 0;
    left: 0;
    opacity: 0.189;
  }

  .top-line-container {
    position: relative;
    z-index: 3;
    width: 60%;
    margin: 0 auto;
    text-align: center;
    margin-bottom: 30px;

    .content-title {
      width: 60%;
      margin: 0 auto;
    }

    .h2 {
      font-size: 3em;
      text-align: center;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
      letter-spacing: -0.72px;
      color: #fff;
      margin-bottom: 20px;

      span {
        color: #09C;
      }
    }

    .subtitle-wrapper {
      color: #fff;

      p {
        font-size: 20px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        letter-spacing: -0.3px;

      }
    }
  }
  .benefits{
    position: relative;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;
    position: relative;
    z-index: 5;
    width: 100%;
    max-width: 1600px;
    margin:  0 auto;

    .benefit{
      display: flex;
      flex-direction: column;
      flex-wrap: nowrap;
      align-items: center;
      margin: 15px;


      img {
        width: 300px;
        height: 100%;
        max-height: 300px;
        margin-bottom: 15px;
        border-radius: 15px;
      }
      p {
        color: #fff;
        font-size: 22px;
      }
    }

    .popUp{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 40%);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10;

      .popUp_text{
        background-color: #fff;
        padding: 10px 15px;
        border-radius: 15px;
        width: 100%;
        max-width: 1000px;

        h2 {
        color: #09C;
        font-size: 22px;
        margin-bottom: 15px;
        }

        p {
          color: #000000;
        }

        span{
          display: flex;
          flex-direction: row-reverse;

          button {
          padding: 5px 10px;
          margin: 10px;
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
          transition: 0.3s ease all;
        }
        }
        }
    }
  }
}

@media (max-width: 1115px) {
  .review-item-container {
    max-width: 500px;
  }
  .benefits-wrapper .benefits .popUp .popUp_text{
    max-width: 500px;
    margin: 20px;
  }
}

@media (max-width: 757px) {
  .review-item-container {
    max-width: 320px;
  }
}

@media (max-width: 490px) {
  .benefits-wrapper{
    padding: 60px 0;
  }
  .benefits-wrapper .top-line-container {
    width: 90%;
  }
  .benefits-wrapper .top-line-container .h2 {
    font-size: 1.5rem;
  }
  .benefits-wrapper .top-line-container .subtitle-wrapper p {
    font-size: 14px;
  }
  .review-item-container {
    max-width: 250px;
  }
}
</style>
