import { useMainStore } from "#imports";
import { category } from "~/data/category";
import { dataWiki } from "~/data/dataWiki";
import { privilegeWork } from "~/data/privilegeWork";

export const setBrands = () => {
    const store = useMainStore();
    const selectedLangText = computed<object>(() => store.selectedLangText);
    const allSiteText = computed<object>(() => store.allSiteText);

    const brands = allSiteText.value["car_brands"]["selected_brands"]
    for (const key in brands) {
        category.value.push(brands[key]["brand"]);
    }
}
const setDataWiki = (data:object) => {
    

    for (const key in dataWiki.value) {        
        switch (key) {
            case 'howtobuy': {
                let iterator = 0
                for (const item in dataWiki.value[key].content) {
                    
                    dataWiki.value[key].content[item].title = data['buy'][iterator]['title']
                    dataWiki.value[key].content[item].text = data['buy'][iterator]['description']
                    iterator ++
                }
            }
                break;
            case 'aboutactions': {
                let iterator = 0
                for (const item in dataWiki.value[key].content) {
                    
                    dataWiki.value[key].content[item].title = data['actions'][iterator]['title']
                    dataWiki.value[key].content[item].text = data['actions'][iterator]['description']
                    iterator ++
                }
            }
                break;
            case 'newsblogs': {
                let iterator = 0
                for (const item in dataWiki.value[key].content) {
                    
                    dataWiki.value[key].content[item].title = data['blog'][iterator]['title']
                    dataWiki.value[key].content[item].text = data['blog'][iterator]['description']
                    iterator ++
                }
            }
                break;
            case 'faqs': {
                let iterator = 0
                for (const item in dataWiki.value[key].content) {
                    
                    dataWiki.value[key].content[item].title = data['faqs'][iterator]['title']
                    dataWiki.value[key].content[item].text = data['faqs'][iterator]['description']
                    iterator ++
                }
            }
                break;
            default:
                break;
        }
        
    }
    
}



export  function setText() {
    const store = useMainStore();
    const selectedLangText = computed<object>(() => store.selectedLangText);
    const allSiteText = computed<object>(() => store.allSiteText);

    setDataWiki(selectedLangText.value['header'])
    privilegeWork.value = selectedLangText.value['privilegeBlock']

}
