import {defineStore} from "pinia";
import {type Ref, ref} from "vue";

export interface MainStore {
    currency: Ref<string>

    changeLanguage: () => void
    setLang: () => void
    setAllSiteText: (data:object) => void
    setSelectedText: (lang:string) => void
    changeLoaderState: (state:boolean) => void
    changeErrorState: (state:boolean) => void
    hiddenHeader: Ref<string>
    currentLanguage: Ref<string>
    allSiteText: Ref<object>
    selectedLangText: Ref<object>
    isShowLoader: Ref<boolean>
    isShowError: Ref<boolean>
}

export const useMainStore = defineStore('mainStore', () => {
    const currency: Ref<string> = ref('')
    const hiddenHeader: Ref<string> = ref('')
    const currentLanguage: Ref<any> = ref('')
    const allSiteText: Ref<object> = ref({})
    const selectedLangText: Ref<object> = ref({})
    const isShowLoader: Ref<boolean> = ref(true)
    const isShowError: Ref<boolean> = ref(false)



    function changeLanguage () {
        currentLanguage.value = currentLanguage.value === 'EN' ? 'JA' : 'EN'
        localStorage.setItem("lang", currentLanguage.value)
        setSelectedText(currentLanguage.value)        
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

    function changeLoaderState(state:boolean) {
        isShowLoader.value = state
    }

    function changeErrorState(state:boolean) {
        isShowError.value = state
    }
    return {
        currency,
        changeLanguage,
        setLang,
        setAllSiteText,
        setSelectedText,
        changeLoaderState,
        changeErrorState,
        hiddenHeader,
        currentLanguage,
        allSiteText,
        selectedLangText,
        isShowLoader,
        isShowError
    } as MainStore
})
