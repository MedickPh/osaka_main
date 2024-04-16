import { ref } from 'vue';
export const headerBar = ref({
    howToBay: {
        fromAction: {text: "", link: "/howtobuy/fromauction"},
        domesticStock: {text: "", link: "/howtobuy/domesticstock"},
        importRegulations: {text: "", link: "/howtobuy/importregulations"},
        ourProcess: {text: "", link: "/howtobuy/ourproces"}
    },
    aboutAuctions: {
        auctionHouses: {text: "", link: ""},
        auctionCalendar: {text: "", link: ""},
        gradingSystem: {text: "", link: ""},
        rulesNegotiation: {text: "", link: ""},
        ourProcess: {text: "s", link: ""}
    },
    importRegulationsByCountry: {
        importRegulations: {text: "", link: "/importregulationsbycountry/countrylist"}
    },
    newsBlog: {
        latestNews: {text: "", link: ""},
        blog: {text: "", link: ""},
        importRegulations: {text: "", link: ""},
        userReviews: {text: "", link: ""},
        termsConditions: {text: "", link: ""}
    },
    faq: {
        aboutUs: {text: "", link: ""},
        bankInformation: {text: "", link: ""},
        contactInformation: {text: "", link: ""},
        location: {text: "", link: ""},
        inquiryForm: {text: "", link: ""}
    }
})
