import {useMainStore} from "#imports";
import { category } from "~/data/category";

const store = useMainStore();
const selectedLangText = computed<object>(() => store.selectedLangText);
const allSiteText = computed<object>(() => store.allSiteText);

export function setText() {
    const brands = allSiteText.value['car_brands']['selected_brands'] 
    
    for (const key in brands) {
        category.push(brands[key]['brand'])
    }
    console.log(category);
    
}