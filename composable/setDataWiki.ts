
import { dataWiki } from "~/data/dataWiki";

export const setDataWiki = (data:object) => {
    for (const key in dataWiki.value) {        
        switch (key) {
            case 'howtobuy': {
                let iterator = 0
                dataWiki.value[key].menu = []
                for (const item in dataWiki.value[key].content) {
                    dataWiki.value[key].menu.push(data['buy'][iterator]['title'])
                    dataWiki.value[key].content[item].title = data['buy'][iterator]['title']
                    dataWiki.value[key].content[item].text = data['buy'][iterator]['description']
                    iterator ++
                }
            }
                break;
            case 'aboutactions': {
                let iterator = 0
                dataWiki.value[key].menu = []
                for (const item in dataWiki.value[key].content) {
                    dataWiki.value[key].menu.push(data['actions'][iterator]['title'])
                    dataWiki.value[key].content[item].title = data['actions'][iterator]['title']
                    dataWiki.value[key].content[item].text = data['actions'][iterator]['description']
                    iterator ++
                }
            }
                break;
            case 'importregulationsbycountry': {
                let iterator = 0
                dataWiki.value[key].menu = []
                for (const item in dataWiki.value[key].content) {
                    dataWiki.value[key].menu.push(data['import'][iterator]['title'])
                    dataWiki.value[key].content[item].title = data['import'][iterator]['title']
                    iterator ++
                }
            }
                break;
            case 'newsblogs': {
                let iterator = 0
                dataWiki.value[key].menu = []
                for (const item in dataWiki.value[key].content) {
                    dataWiki.value[key].menu.push(data['blog'][iterator]['title'])
                    dataWiki.value[key].content[item].title = data['blog'][iterator]['title']
                    dataWiki.value[key].content[item].text = data['blog'][iterator]['description']
                    iterator ++
                }
            }
                break;
            case 'faqs': {
                dataWiki.value[key].menu = []
                let iterator = 0
                for (const item in dataWiki.value[key].content) {
                    dataWiki.value[key].menu.push(data['faqs'][iterator]['title'])
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