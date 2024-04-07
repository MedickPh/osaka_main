<script lang="ts" setup>
import {useMainStore, ref} from "#imports";
import './scss/main.scss';
import InfoBar from "./components/InfoBar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MobileHeader from "~/components/MobileHeader.vue";
import {text} from "~/data/text"
import { setText, setBrands } from '~/composable/setText' 

const store = useMainStore();

onBeforeMount(()=> {
  store.setLang()
  store.setAllSiteText(text)
  setText()
  setBrands()
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
