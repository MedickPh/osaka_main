import { useMainStore } from "#imports";

export function useRestoreTitleHeader(key: string) {
// title in dropdown menu list

const store = useMainStore();
const selectedLangText = computed<object>(() => store.selectedLangText);

    switch (key) {
        case "howToBay":
            return selectedLangText.value['header']['navigation_menu']['first_element']
        case "aboutAuctions":
            return selectedLangText.value['header']['navigation_menu']['second_element']
        case "importRegulationsByCountry":
            return selectedLangText.value['header']['navigation_menu']['third_block']
        case "newsBlog":
            return selectedLangText.value['header']['navigation_menu']['fourth_block']
        case "faq":
            return selectedLangText.value['header']['navigation_menu']['fifth_block']
    }
}
