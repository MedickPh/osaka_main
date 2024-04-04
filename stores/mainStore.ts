import {defineStore} from "pinia";
import {type Ref, ref} from "vue";

export interface MainStore {
    currency: Ref<string>
    getCurrencyData: () => void
    changeLanguage: () => void
    hiddenHeader: Ref<string>
    currentLanguage: Ref<string>
    getLang: () => void
}

export const useMainStore = defineStore('mainStore', () => {
    const currency: Ref<string> = ref('')
    const hiddenHeader: Ref<string> = ref('')
    const currentLanguage: Ref<string> = ref('EN')

    function getCurrencyData() {
        currency.value = Math.random().toFixed(2).toString()
    }

    function changeLanguage () {        
        currentLanguage.value = currentLanguage.value === 'EN' ? 'JA' : 'EN'
    }

    function getLang () {
        console.log(currentLanguage.value);
        
    }

    return {
        currency,
        getCurrencyData,
        changeLanguage,
        getLang,
        hiddenHeader,
        currentLanguage
    } as MainStore
})
