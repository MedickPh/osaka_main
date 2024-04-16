export function useRestoreTitleHeader(key: string) {
// title in dropdown menu list

    
    switch (key) {
        case "howToBay":
            return "How to buy"
        case "aboutAuctions":
            return 'About Actions';
        case "importRegulationsByCountry":
            return 'Import Regulations';
        case "newsBlog":
            return 'News/Blog';
        case "faq":
            return 'Faqs';
    }
}
