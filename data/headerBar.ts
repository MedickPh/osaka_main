import { ref } from 'vue';
export const headerBar = ref({
    howToBay: {
        fromAction: {text: "", link: "/howtobuy/fromauction"},
        domesticStock: {text: "", link: "/howtobuy/domesticstock"},
        importRegulations: {text: "", link: "/howtobuy/importregulations"},
        ourProcess: {text: "", link: "/howtobuy/ourproces"}
    },
    aboutAuctions: {
        auctionHouses: {text: "", link: "/aboutactions/auctionhouses"},
        auctionCalendar: {text: "", link: "/aboutactions/auctioncalendar"},
        gradingSystem: {text: "", link: "/aboutactions/gradingsystem"},
    },
    importRegulationsByCountry: {
        importRegulations: {text: "", link: "/importregulationsbycountry/countrylist"}
    },
    newsBlog: {
        latestNews: {text: "", link: "/newsblogs/latestnews"},
        blog: {text: "", link: "/newsblogs/blog"},
        importRegulations: {text: "", link: "/newsblogs/importregulations"},
    },
    faq: {
        aboutUs: {text: "", link: "/faqs/aboutus"},
        bankInformation: {text: "", link: "/faqs/bankinformation"},
        contactInformation: {text: "", link: "/faqs/contactinfomration"},
        location: {text: "", link: "/faqs/location"},
        // inquiryForm: {text: "", link: "/faqs/inquiryform"}
    }
})
