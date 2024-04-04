export function useCompareWikiRoute(title: string) {
    switch (title) {
        case "From auction" : {
            return 'fromauction'
        }
        case 'Domestic Stock' : {
            return "domesticstock"
        }
        case "Import Regulations": {
            return 'importregulations'
        }
        case "Our Process":
            return 'ourproces'
        case "Country list":
            return 'countrylist'
        default: {
            return 'fromauction'
        }
    }
}
