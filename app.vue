<script lang="ts" setup>
import {useMainStore} from "#imports";
import {watch} from 'vue'
import './scss/main.scss';
import InfoBar from "./components/InfoBar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MobileHeader from "~/components/MobileHeader.vue";
const store = useMainStore();
const currentLanguage = computed<string>(() => store.currentLanguage);

watch(currentLanguage, ( newValue, oldValue) =>{
  store.getLang()
})
</script>
<template>
  <div>
    <InfoBar/>
    <Header/>
    <MobileHeader/>
    <HeaderMobile/>
    <RouterView/>
    <Footer/>
  </div>
</template>
