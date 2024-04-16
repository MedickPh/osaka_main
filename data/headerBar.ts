import { ref } from 'vue';
export const headerBar = ref({
    howToBay: {
        fromAction: {text: "From Auction1", link: "/howtobuy/fromauction"},
        domesticStock: {text: "Domestic Stock2", link: "/howtobuy/domesticstock"},
        importRegulations: {text: "Import Regulations3", link: "/howtobuy/importregulations"},
        ourProcess: {text: "Our Process4", link: "/howtobuy/ourproces"}
    },
    aboutAuctions: {
        auctionHouses: {text: "Auction Houses", link: ""},
        auctionCalendar: {text: "Auction Calendar", link: ""},
        gradingSystem: {text: "Grading System", link: ""},
        rulesNegotiation: {text: "Rules/Negotiation", link: ""},
        ourProcess: {text: "Our Process", link: ""}
    },
    importRegulationsByCountry: {
        importRegulations: {text: "Select your country", link: "/importregulationsbycountry/countrylist"}
    },
    newsBlog: {
        latestNews: {text: "Latest News", link: ""},
        blog: {text: "Blog", link: ""},
        importRegulations: {text: "Import Regulations", link: ""},
        userReviews: {text: "User Reviews", link: ""},
        termsConditions: {text: "Terms & Conditions", link: ""}
    },
    faq: {
        aboutUs: {text: "About Us", link: ""},
        bankInformation: {text: "Bank Information", link: ""},
        contactInformation: {text: "Contact Infomration", link: ""},
        location: {text: "Location", link: ""},
        inquiryForm: {text: "Inquiry Form", link: ""}
    }
})
