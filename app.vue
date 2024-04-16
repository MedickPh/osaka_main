<script lang="ts" setup>
import { useMainStore, ref, computed } from "#imports";
import './scss/main.scss';
import axios from 'axios';
import InfoBar from "./components/InfoBar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MobileHeader from "~/components/MobileHeader.vue";
import Preloader from "./components/loaders/preloader.vue"
import Error from "./components/loaders/error.vue"

import { setText } from '~/composable/setText'
import { setBrands } from '~/composable/setBrands'
const store = useMainStore();

const isShowLoader = computed<boolean>(() => store.isShowLoader);
const isShowError = computed<boolean>(() => store.isShowError);
const isError = ref()




const getText = async () => {
  try {
    const response = await axios.get('http://13.231.117.234/api/main_landing', {
      headers: {
        "Content-Type": "application/json",
      },
    })
    console.log(response.data);
    
    return response.data
  } catch (error) {
    console.error(error);
    throw error;

  }
}

const start = async () => {
  try {
    store.setLang()
    const res = await getText()
    ;
    
    store.setAllSiteText(res)
    setText()
    setBrands()
  } catch (error) {
    console.error(error)
    throw error
  }
}

onBeforeMount(async () => {
  try {
    await start()
    isError.value = false
    store.changeLoaderState(false)
  } catch (error) {
    console.log(error);
    
    store.changeLoaderState(false)
    store.changeErrorState(true)
    isError.value = isShowError.value
  }
});


</script>
<template>
  <div>
    <Preloader v-if="isShowLoader === true" />
    <Error v-if="isShowError === true" />
    <InfoBar v-if="isError === false" />
    <Header v-if="isError === false" />
    <MobileHeader v-if="isError === false" />
    <HeaderMobile v-if="isError === false" />
    <RouterView v-if="isError === false" />
    <Footer v-if="isError === false" />
  </div>
</template>
