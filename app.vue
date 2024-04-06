<script lang="ts" setup>
import {useMainStore, ref} from "#imports";
import './scss/main.scss';
import InfoBar from "./components/InfoBar.vue";
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MobileHeader from "~/components/MobileHeader.vue";
import {text} from "~/data/text"


const store = useMainStore();
const currentLanguage = computed<string>(() => store.currentLanguage);

const allSiteText = computed<object>(()=> store.allSiteText)
const setAllText = (text:object) => {
  store.setAllSiteText(text)
}


onMounted(()=> {
  setAllText(text)

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
