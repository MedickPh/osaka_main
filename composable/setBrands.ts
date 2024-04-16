import { useMainStore } from "#imports";
import { category } from "~/data/category";

export const setBrands = () => {
    const store = useMainStore();
    const selectedLangText = computed<object>(() => store.selectedLangText);
    const allSiteText = computed<object>(() => store.allSiteText);

    const brands = allSiteText.value["car_brands"]["selected_brands"]
    for (const key in brands) {
        category.value.push(brands[key]["brand"]);
    }
}