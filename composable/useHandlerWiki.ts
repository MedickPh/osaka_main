import {dataWiki} from "~/data/dataWiki";
// change hidden blocks

export function useHandlerWiki(title: string, method: any) {
    const currentData = dataWiki.value[method]
    return currentData.content[title]

}
