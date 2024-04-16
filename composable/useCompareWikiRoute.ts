import {dataWiki} from "~/data/dataWiki";

export function useCompareWikiRoute(title: string, mainData:object) {
    for (const key in mainData.value['content']) {
        if (mainData.value['content'][key]['title'] === title) {
            return key
        }
    }
}
