import {dataWiki} from "~/data/dataWiki";


export function useGetData(router: any) {
    const restoreRouter = router.fullPath.split('/')[1]
    return dataWiki.value[restoreRouter]
}
