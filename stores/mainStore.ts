import {defineStore} from "pinia";
import {type Ref, ref} from "vue";

export interface MainStore {
    currency: Ref<string>
    getCurrencyData: () => void
    changeLanguage: () => void
    setLang: () => void
    setAllSiteText: (data:object) => void
    setSelectedText: (lang:string) => void
    hiddenHeader: Ref<string>
    currentLanguage: Ref<string>
    allSiteText: Ref<object>
    selectedLangText: Ref<object>
}

export const useMainStore = defineStore('mainStore', () => {
    const currency: Ref<string> = ref('')
    const hiddenHeader: Ref<string> = ref('')
    const currentLanguage: Ref<any> = ref('')
    const allSiteText: Ref<object> = ref({})
    const selectedLangText: Ref<object> = ref({})

    function getCurrencyData() {
        currency.value = Math.random().toFixed(2).toString()
    }

    function changeLanguage () {
        currentLanguage.value = currentLanguage.value === 'EN' ? 'JA' : 'EN'
        localStorage.setItem("lang", currentLanguage.value)
    }
    function setLang() {
        currentLanguage.value = localStorage.getItem('lang') ? localStorage.getItem('lang') : 'EN'
    }
    function setAllSiteText(data:object) {
        allSiteText.value = data
        setSelectedText(currentLanguage.value)
    }
    function setSelectedText(lang:string) {
        selectedLangText.value = allSiteText.value[`${lang.toLowerCase()}`]
    }
    return {
        currency,
        getCurrencyData,
        changeLanguage,
        setLang,
        setAllSiteText,
        setSelectedText,
        hiddenHeader,
        currentLanguage,
        allSiteText,
        selectedLangText
    } as MainStore
})
