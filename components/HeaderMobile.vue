<script lang="ts" setup>
import { ref, useMainStore } from "#imports";
import { headerBar } from "~/data/headerBar";
import { useRestoreTitleHeader } from "~/composable/useRestoreTitleHeader";
import { setText } from "~/composable/setText";

const store = useMainStore()
const selectedLangText = computed<object>(() => store.selectedLangText);
const currentLanguage = computed<string>(() => store.currentLanguage);
const options = ['En', 'Ja'];
const isOpen = ref(false);

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const selectOption = (event: Event, option: string) => {
  store.changeLanguage(option.toLowerCase())
  setText()
  store.changeLanguage(option)
  isOpen.value = !isOpen.value
  event.stopPropagation();
};

const openSecondMenu = ref(false)
const currentSecondMenu = ref({})
const secondTitle = ref('')
const openHidden = ref(false)
const restoreOpen = ref(false)
const restoreFirstOpen = ref(false)

function handlerSecondMenu(active: string) {
  if (secondTitle.value === useRestoreTitleHeader(active)) {
    openSecondMenu.value = false
    secondTitle.value = ''
    return
  }
  openSecondMenu.value = true
  secondTitle.value = useRestoreTitleHeader(active)
  currentSecondMenu.value = headerBar.value[active]
}

watch(secondTitle, () => {
  restoreOpen.value = true
})
watch(openHidden, () => {
  restoreFirstOpen.value = true
})

function backHandler() {
  openSecondMenu.value = false
  secondTitle.value = ''
}

function closeFirstMenu() {
  openHidden.value = false
  secondTitle.value = ''
  openSecondMenu.value = false
}
</script>
<template>
  <header class="mobile-header-second">
    <div class="logo-wrapper">
      <svg xmlns="http://www.w3.org/2000/svg" width="121" height="36" viewBox="0 0 121 36" fill="none">
        <path
            d="M36.2752 18C36.2752 22.808 34.3886 27.3281 30.9629 30.728C29.5785 32.1019 28.0097 33.2259 26.3118 34.0787C24.8165 34.8294 23.2199 35.3688 21.5615 35.6816C20.4443 35.8923 19.2993 36 18.1376 36C17.8588 36 17.5811 35.9938 17.3047 35.981C15.6711 35.9087 14.0771 35.6223 12.5544 35.1355C11.6482 34.846 10.7678 34.4853 9.91955 34.0561L12.5544 30.3398L12.6975 30.1383C14.1202 30.769 15.6737 31.1602 17.3047 31.26C17.5799 31.2771 17.8582 31.2857 18.1376 31.2857C19.3202 31.2857 20.4683 31.1327 21.5615 30.8455C23.3099 30.3858 24.9201 29.583 26.3118 28.5147C29.481 26.0828 31.5249 22.2734 31.5249 18C31.5249 10.6745 25.5192 4.71429 18.1376 4.71429C10.7561 4.71429 4.75033 10.6745 4.75033 18C4.75033 18.142 4.75277 18.2835 4.75715 18.4243L0.953719 23.7882C0.325701 21.9484 0 19.999 0 18C0 13.192 1.88661 8.67187 5.31233 5.27203C8.73818 1.8723 13.2929 0 18.1376 0C22.9824 0 27.5371 1.8723 30.9629 5.27203C34.3886 8.67187 36.2752 13.192 36.2752 18Z"
            fill="#003366"/>
        <path
            d="M26.3119 9.18368L21.5616 15.8829L17.3048 21.8853L12.5544 28.5846L12.3632 28.8539L11.7734 29.6859L9.01946 33.5694C7.90836 32.9253 6.86025 32.16 5.89288 31.2796L8.6616 27.3753L9.25636 26.5359L12.5544 21.8853L17.3048 15.1868L21.5616 9.18368H26.3119Z"
            fill="#0099CC"/>
        <path d="M26.3119 9.18365V27.2056C24.9577 28.391 23.3414 29.2879 21.5616 29.7967V15.8829L26.3119 9.18365Z"
              fill="#003366"/>
        <path
            d="M17.3048 9.18365L12.5544 15.8829L7.11069 23.5592L6.45551 24.4831L3.50604 28.6427C2.6472 27.4861 1.93843 26.2414 1.38812 24.9306L4.89898 19.9794L5.78985 18.7231L12.5544 9.18365H17.3048Z"
            fill="#0099CC"/>
        <path d="M17.3048 9.18367V13.4315L12.5544 20.1306V15.8829L17.3048 9.18367Z" fill="#003366"/>
        <path
            d="M51.4857 18.7259H43.5631V11.0326H51.4857V18.7259ZM51.1187 7.73533H43.9301C42.0337 7.73533 40.4963 9.26106 40.4963 11.1431V18.6153C40.4963 20.4974 42.0337 22.0231 43.9301 22.0231H51.1187C53.0152 22.0231 54.5525 20.4974 54.5525 18.6153V11.1431C54.5525 9.26106 53.0152 7.73533 51.1187 7.73533Z"
            fill="#0099CC"/>
        <path
            d="M56.9378 10.8373V13.5948C56.9378 15.308 58.3372 16.6968 60.0635 16.6968H68.0976V18.7259H56.9378V22.023H68.0667C69.7775 22.023 71.1643 20.6467 71.1643 18.9489V16.4738C71.1643 14.7761 69.7775 13.3997 68.0667 13.3997H60.0046V11.0326H71.1643V7.73533H60.0635C58.3372 7.73533 56.9378 9.12411 56.9378 10.8373Z"
            fill="#0099CC"/>
        <path
            d="M84.7094 16.1051H76.3609V11.0326H84.7094V16.1051ZM84.4539 7.73533H76.6166C74.7816 7.73533 73.2941 9.21151 73.2941 11.0326V22.0231H76.3609V19.4022H84.7094V22.0231H87.7763V19.0599V11.0326C87.7763 9.21151 86.2888 7.73533 84.4539 7.73533Z"
            fill="#0099CC"/>
        <path
            d="M117.933 16.1051H109.585V11.0326H117.933V16.1051ZM117.678 7.73533H109.84C108.005 7.73533 106.518 9.21151 106.518 11.0326V22.0231H109.585V19.4022H117.933V22.0231H121V11.0326C121 9.21151 119.513 7.73533 117.678 7.73533Z"
            fill="#0099CC"/>
        <path
            d="M101.999 11.0325L105.898 7.73539H101.168L93.4839 14.2133V7.73539H90.4171V22.0231H93.4839V15.989L100.575 22.0231H105.305L102.206 19.4022L101.406 18.7258L99.0067 16.6969L98.3064 16.1051L97.153 15.1295L99.1993 13.3997L101.999 11.0325Z"
            fill="#0099CC"/>
        <path
            d="M49.6206 31.5411H48.1053L48.0866 27.6241C48.0866 27.3768 47.9868 27.1757 47.7873 27.0208C47.5878 26.8662 47.3572 26.7887 47.0953 26.7887H46.1599L46.1788 31.5411H44.6634L44.6448 26.7887H42.6995L42.7181 31.5411H41.2403L41.2216 25.4151H47.0953C47.4442 25.4151 47.7716 25.4739 48.0773 25.5914C48.3827 25.7092 48.6479 25.867 48.8722 26.0648C49.0968 26.2629 49.2744 26.4949 49.4053 26.7609C49.5363 27.0272 49.6017 27.3149 49.6017 27.6241L49.6206 31.5411Z"
            fill="#003366"/>
        <path
            d="M63.2568 27.6241C63.2568 27.3768 63.1601 27.1757 62.9669 27.0208C62.7735 26.8662 62.5396 26.7887 62.2654 26.7887H59.7963C59.5345 26.7887 59.3128 26.8662 59.1322 27.0208C58.9513 27.1757 58.8609 27.3768 58.8609 27.6241V29.332C58.8609 29.5797 58.9513 29.7807 59.1322 29.9353C59.3128 30.0902 59.5345 30.1673 59.7963 30.1673H62.2654C62.5396 30.1673 62.7735 30.0902 62.9669 29.9353C63.1601 29.7807 63.2568 29.5797 63.2568 29.332V27.6241ZM62.2654 25.4151C62.6144 25.4151 62.9388 25.4739 63.2381 25.5914C63.5373 25.7092 63.7992 25.867 64.0238 26.0648C64.2481 26.2629 64.4226 26.495 64.5475 26.7609C64.672 27.0272 64.7346 27.3151 64.7346 27.6241V29.332C64.7346 29.6415 64.672 29.9324 64.5475 30.2044C64.4226 30.4769 64.2511 30.7121 64.033 30.9099C63.8148 31.1081 63.5562 31.2626 63.2568 31.3741C62.9574 31.4854 62.633 31.5411 62.2841 31.5411H59.815C59.4783 31.5411 59.157 31.4854 58.8515 31.3741C58.5458 31.2626 58.281 31.1081 58.0566 30.9099C57.832 30.7121 57.6544 30.4769 57.5236 30.2044C57.3924 29.9324 57.3269 29.6415 57.3269 29.332V27.6241C57.3269 27.3151 57.3924 27.0272 57.5236 26.7609C57.6544 26.495 57.832 26.2629 58.0566 26.0648C58.281 25.867 58.5429 25.7092 58.8423 25.5914C59.1414 25.4739 59.4594 25.4151 59.7963 25.4151H62.2654Z"
            fill="#003366"/>
        <path
            d="M73.713 25.7121H78.7636V27.0672H73.713V29.3319C73.713 29.5797 73.7535 29.7807 73.8346 29.9353C73.9157 30.0902 73.9871 30.1673 74.0497 30.1673H78.7636L78.7823 31.5411H74.0311C73.7814 31.5411 73.5448 31.4854 73.3202 31.3741C73.0959 31.2626 72.8994 31.1081 72.7311 30.9099C72.5627 30.7121 72.4317 30.48 72.3383 30.2139C72.2448 29.9478 72.1979 29.6539 72.1979 29.3319V24.2826H73.713V25.7121Z"
            fill="#003366"/>
        <path
            d="M92.1755 27.6241C92.1755 27.3768 92.0788 27.1757 91.8856 27.0208C91.6922 26.8662 91.4583 26.7887 91.1841 26.7887H88.715C88.4532 26.7887 88.2315 26.8662 88.0509 27.0208C87.87 27.1757 87.7796 27.3768 87.7796 27.6241V29.332C87.7796 29.5797 87.87 29.7807 88.0509 29.9353C88.2315 30.0902 88.4532 30.1673 88.715 30.1673H91.1841C91.4583 30.1673 91.6922 30.0902 91.8856 29.9353C92.0788 29.7807 92.1755 29.5797 92.1755 29.332V27.6241ZM91.1841 25.4151C91.5331 25.4151 91.8575 25.4739 92.1568 25.5914C92.456 25.7092 92.7179 25.867 92.9425 26.0648C93.1668 26.2629 93.3413 26.495 93.4662 26.7609C93.5907 27.0272 93.6533 27.3151 93.6533 27.6241V29.332C93.6533 29.6415 93.5907 29.9324 93.4662 30.2044C93.3413 30.4769 93.1698 30.7121 92.9517 30.9099C92.7335 31.1081 92.4749 31.2626 92.1755 31.3741C91.8761 31.4854 91.5517 31.5411 91.2028 31.5411H88.7337C88.397 31.5411 88.0757 31.4854 87.7702 31.3741C87.4645 31.2626 87.1997 31.1081 86.9753 30.9099C86.7507 30.7121 86.5731 30.4769 86.4423 30.2044C86.3111 29.9324 86.2457 29.6415 86.2457 29.332V27.6241C86.2457 27.3151 86.3111 27.0272 86.4423 26.7609C86.5731 26.495 86.7507 26.2629 86.9753 26.0648C87.1997 25.867 87.4616 25.7092 87.761 25.5914C88.0601 25.4739 88.3781 25.4151 88.715 25.4151H91.1841Z"
            fill="#003366"/>
        <path
            d="M106.429 27.8284H104.932V27.0115C104.895 26.9623 104.792 26.9126 104.624 26.863C104.456 26.8137 104.234 26.7887 103.96 26.7887H102.613L102.632 31.541H101.098L101.079 25.4151H103.96C104.695 25.4151 105.291 25.5728 105.746 25.8884C106.201 26.204 106.429 26.5724 106.429 26.993V27.8284Z"
            fill="#003366"/>
        <path
            d="M120.439 27.2529H118.924V26.9002C118.712 26.8259 118.394 26.7887 117.97 26.7887H116.287C116 26.7887 115.772 26.8445 115.604 26.9558C115.435 27.0672 115.351 27.1911 115.351 27.3271C115.351 27.4385 115.435 27.5499 115.604 27.6612C115.772 27.7727 116 27.8284 116.287 27.8284H117.97C118.307 27.8284 118.625 27.878 118.924 27.9769C119.223 28.0761 119.485 28.2088 119.71 28.376C119.934 28.5431 120.112 28.7412 120.243 28.97C120.374 29.1992 120.439 29.4435 120.439 29.7034C120.439 29.9511 120.374 30.1859 120.243 30.4087C120.112 30.6315 119.937 30.8265 119.719 30.9935C119.501 31.1606 119.242 31.2937 118.943 31.3925C118.643 31.4918 118.325 31.5411 117.989 31.5411H116.305C115.756 31.5411 115.32 31.4918 114.996 31.3925C114.671 31.2937 114.422 31.1792 114.248 31.0492C114.073 30.9193 113.958 30.7865 113.902 30.65C113.845 30.514 113.817 30.4087 113.817 30.3345V29.7405H115.351V30.056C115.501 30.1303 115.813 30.1674 116.287 30.1674H117.97C118.244 30.1674 118.472 30.1181 118.653 30.0189C118.833 29.92 118.924 29.8147 118.924 29.7034C118.924 29.5673 118.833 29.4466 118.653 29.3413C118.472 29.2363 118.244 29.1836 117.97 29.1836H116.287C115.95 29.1836 115.632 29.1342 115.332 29.035C115.033 28.936 114.771 28.803 114.547 28.6359C114.323 28.4687 114.145 28.2739 114.014 28.0511C113.883 27.8284 113.817 27.587 113.817 27.3271C113.817 27.0552 113.883 26.8045 114.014 26.5754C114.145 26.3464 114.323 26.1454 114.547 25.972C114.771 25.7987 115.033 25.6628 115.332 25.5635C115.632 25.4646 115.95 25.4151 116.287 25.4151H117.97C118.481 25.4151 118.899 25.4646 119.223 25.5635C119.548 25.6628 119.8 25.7771 119.981 25.907C120.162 26.037 120.283 26.1761 120.346 26.3247C120.408 26.4731 120.439 26.591 120.439 26.6774V27.2529Z"
            fill="#003366"/>
      </svg>
    </div>
    <div class="burger-menu-handl" @click="openHidden = !openHidden">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
           stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
           class="feather feather-menu">
        <line x1="3" y1="12" x2="21" y2="12"/>
        <line x1="3" y1="6" x2="21" y2="6"/>
        <line x1="3" y1="18" x2="21" y2="18"/>
      </svg>
    </div>
    <div v-if="restoreFirstOpen" class="hidden-menu-optical" :class="openHidden ? 'is-active': 'non-active'">
      <div class="close-btn-wrapper" @click="closeFirstMenu">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="feather feather-x">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </div>
      <div class="back-btn-wrapper" v-if="secondTitle !== '' && openSecondMenu" @click="backHandler">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
             stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
             class="feather feather-arrow-left">
          <line x1="19" y1="12" x2="5" y2="12"/>
          <polyline points="12 19 5 12 12 5"/>
        </svg>
      </div>
      <div class="top-line-wrapper">
        <h4 v-if="secondTitle === '' && !openSecondMenu" class="h4">Menu</h4>
        <h4 v-else>{{ secondTitle }}</h4>
      </div>
      <nav class="main-navbar-mobile">
        <ul v-if="secondTitle === '' && !openSecondMenu">
          <li @click="handlerSecondMenu('howToBay')">{{ selectedLangText['header']['navigation_menu']['first_element']}}</li>
          <li @click="handlerSecondMenu('aboutAuctions')">{{ selectedLangText['header']['navigation_menu']['second_element'] }}</li>
          <li @click="handlerSecondMenu('importRegulationsByCountry')">{{ selectedLangText['header']['navigation_menu']['third_block'] }} </li>
          <li @click="handlerSecondMenu('newsBlog')">{{ selectedLangText['header']['navigation_menu']['fourth_block'] }}</li>
          <li @click="handlerSecondMenu('faq')">{{ selectedLangText['header']['navigation_menu']['fifth_block'] }}</li>
          <li>{{ selectedLangText['header']['navigation_menu']['sixth_block'] }}</li>
          <div class="custom-select" @click="toggleDropdown()">
          <div class="selected-item">{{ currentLanguage }}</div>
          <div class="dropdown" :class="{ open: isOpen }">
            <div v-for="option in options" :key="option" class="dropdown-item" @click="selectOption($event, option)">
              {{ option }}
            </div>
          </div>
        </div>
        </ul>
        <ul v-else>
          <li v-for="item in currentSecondMenu">{{ item.text }}</li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<style lang="scss">
.mobile-header-second {
  max-width: 100%;
  position: fixed;
  width: 100%;
  background: #fff;
  z-index: 22;
  display: flex;
  justify-content: space-between;
  padding: 10px 70px;
  align-items: center;
  cursor: pointer;
  top: 0;


  .hidden-menu-second {
    position: absolute;
    width: 320px;
    height: 100vh;
    background: #fff;
    z-index: 73;
    right: -320px;
    top: 0;
    visibility: hidden;

    &.is-active {
      animation: fadeInSecond .3s ease-in-out forwards;
    }

    &.non-active {
      animation: fadeOutSecond .3s ease-in-out forwards;
    }

    ul {
      list-style: none;

      li {
        margin-bottom: 20px;
      }
    }
  }

  .hidden-menu-optical {
    position: absolute;
    width: 320px;
    height: 100vh;
    background: #fff;
    z-index: 73;
    right: -320px;
    top: 0;
    visibility: visible;

    &.is-active {
      animation: fadeInFirst .3s ease-in-out forwards;
    }

    &.non-active {
      animation: fadeOutFirst .3s ease-in-out forwards;
    }

    .back-btn-wrapper {
      position: absolute;
      top: 2%;
      left: 5%;
      cursor: pointer;
    }

    .close-btn-wrapper {
      position: absolute;
      top: 2%;
      right: 5%;
      cursor: pointer;
    }

    .main-navbar-mobile {
      ul {
        list-style: none;

        li {
          margin-bottom: 20px;
        }

        .custom-select {
        position: relative;
        display: block;
        cursor: pointer;
        width: 45px;
        margin: 0 auto;

        .selected-item {
          padding: 5px 10px;
          border: 1px solid #09c;
          border-radius: 5px 5px 5px 5px;
        }

        .dropdown {
          position: absolute;
          top: 100%;
          left: 0;
          width: 100%;
          max-height: 200px;
          overflow-y: auto;
          border: 1px solid #ccc;
          background-color: #fff;
          border-radius: 0 0 5px 5px;
          display: none;

          &.open {
            display: block;
            z-index: 1;
          }

          .dropdown-item {
            padding: 5px 10px;
            cursor: pointer;

            &:hover {
              background-color: #09c;
              transition: 0.3s
            }
          }
        }
      }
      }
    }
  }
}

@keyframes fadeInSecond {
  0% {
    right: -320;
    visibility: hidden;
    z-index: -1;
  }
  50% {
    z-index: 12;
  }
  100% {
    z-index: 22;
    right: 320px;
    visibility: visible;
  }
}

@keyframes fadeOutSecond {
  0% {
    z-index: 22;
    right: 320px;
    visibility: visible;
  }
  50% {
    z-index: 12;
  }
  100% {
    right: -320;
    visibility: hidden;
    z-index: -1;

  }
}

@keyframes fadeInFirst {
  0% {
    visibility: hidden;
    right: -320px;
  }
  100% {
    visibility: visible;
    right: 0;
  }
}

@keyframes fadeOutFirst {
  0% {
    visibility: visible;
    right: 0;
  }
  100% {
    visibility: hidden;
    right: -320px;
  }
}


@media (min-width: 640px) {
  .mobile-header-second {
    display: none;
  }
}
</style>

