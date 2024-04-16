import { useMainStore } from "#imports";
import { privilegeWork } from "~/data/privilegeWork";
import { setDataWiki } from "~/composable/setDataWiki";
import { setHeaderBar } from "./setHeaderBar";

export  function setText() {
    const store = useMainStore();
    const selectedLangText = computed<object>(() => store.selectedLangText);
    const allSiteText = computed<object>(() => store.allSiteText);

    setDataWiki(selectedLangText.value['header'])
    setHeaderBar(selectedLangText.value['header'])
    privilegeWork.value = selectedLangText.value['privilegeBlock']
}
