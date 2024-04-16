import {headerBar} from "~/data/headerBar";

export const setHeaderBar = (data:object) => {
    for (const key in headerBar.value) {
        switch (key) {
            case 'howToBay': {
                let iterator = 0
                    for (const item in headerBar.value[key]) {
                        headerBar.value[key][item].text = data['buy'][iterator]['title']
                        iterator ++
                    }
                }
                break;
            case 'aboutAuctions': {
                let iterator = 0
                    for (const item in headerBar.value[key]) {
                        headerBar.value[key][item].text = data['actions'][iterator]['title']
                        iterator ++
                    }
                }
                break;
            case 'importRegulationsByCountry':{
                let iterator = 0
                    for (const item in headerBar.value[key]) {
                        headerBar.value[key][item].text = data['import'][iterator]['title']
                        iterator ++
                    }
                }
                break;
            case 'newsBlog':{
                let iterator = 0
                    for (const item in headerBar.value[key]) {
                        headerBar.value[key][item].text = data['blog'][iterator]['title']
                        iterator ++
                    }
                }
                break;
            case 'faq':{
                let iterator = 0
                    for (const item in headerBar.value[key]) {
                        headerBar.value[key][item].text = data['faqs'][iterator]['title']
                        iterator ++
                    }
                }
                break;
            default:
                break;
        }
    }
}