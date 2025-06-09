class SiteSpecificStyles {
    static headingCTAContainer(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("iowacitybusinessesforsale.com"):
                outputClasses = "mx-0 md:mx-4 mt-4 flex h-[46px] md:h-[58px] bg-left-bottom text-[#200571]";
                break;
            case host?.includes("fairfieldbusinesslistings.com"):
                outputClasses = "bg-gradient-to-t from-mobile-header-dark-background to-mobile-header-background md:bg-[url('/buy-a-business-in-fairfield-iowa.jpg')] mx-0 md:mx-4 flex h-[46px] md:h-[58px] bg-left-bottom";
                break;
            default:
                outputClasses = "mx-0 md:mx-0 mt-0 flex h-[46px] md:h-[44px] bg-left-bottom text-[#04112b]";
        }

        return outputClasses;
    }

    static headingContainer(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("brokeredgeinc.com"):
                outputClasses = "space-y-2 md:space-y-4 px-[19px] mt-3 relative w-full max-w-[430px] md:max-w-none";
                break;
            default:
                outputClasses = "space-y-2 md:space-y-4 px-5 mt-3 relative w-full max-w-[430px] md:max-w-none";
        }

        return outputClasses;
    }

    static mainPageHeading(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("iowacitybusinessesforsale.com"):
                outputClasses = "block text-xl tracking-tight md:tracking-normal md:text-[24px]";
                break;
            case host?.includes("fairfieldbusinesslistings.com"):
                outputClasses = "block text-m md:text-[20px]";
                break;
            default:
                outputClasses = "block text-xl tracking-tight md:tracking-normal md:text-[18px] md:font-bold";
        }

        return outputClasses;
    }

    static sellYourBusinessCta(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("iowacitybusinessesforsale.com"):
                outputClasses = "border-[1px] text-white px-3 md:px-4 py-1 rounded-lg absolute bottom-[5px] md:bottom-[14px] left-auto md:right-[30px] right-[21px] text-[15px] md:text-lg whitespace-nowrap bg-[#200571]";
                break;
            case host?.includes("fairfieldbusinesslistings.com"):
                outputClasses = "bg-transparent border-[1px] border-white border-solid px-3 md:px-6 py-1 rounded-lg absolute top-0 top-[calc(50%-9px)] md:top-[calc(50%-18px)] left-auto md:right-[30px] right-[21px] -translate-y-[22px] md:-translate-y-1/2 md:text-lg whitespace-nowrap";
                break;
            default:
                outputClasses = "border-[1px] text-white px-3 md:px-4 py-1 rounded-lg absolute bottom-[5px] md:bottom-[14px] left-auto md:right-[30px] right-[21px] text-[15px] md:text-lg whitespace-nowrap bg-[#04112b]";
        }

        return outputClasses;
    }

    static standardHeading(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("brokeredgeinc.com"):
                outputClasses = "text-[#04112b] text-xl md:text-xl pb-4 font-bold";
                break;
            case host?.includes("iowacitybusinessesforsale.com"):
                outputClasses = "text-[#200571] text-xl md:text-2xl pb-4";
                break;
            default:
                outputClasses = "text-2xl text-brand-primary pb-4";
        }

        return outputClasses;
    }

    static listingHeading(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("brokeredgeinc.com"):
                outputClasses = "text-2xl md:text-xl text-[#04112b] font-bold";
                break;
            case host?.includes("iowacitybusinessesforsale.com"):
                outputClasses = "text-2xl md:text-3xl text-[#200571]";
                break;
            default:
                outputClasses = "text-3xl text-brand-primary";
        }

        return outputClasses;
    }

    static standardBgColor(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("iowacitybusinessesforsale.com"):
                outputClasses = "[&]:bg-[#200571] hover:[&]:border-[#200571] hover:[&]:text-[#200571]";
                break;
            default:
                outputClasses = "bg-brand-primary";
        }

        return outputClasses;
    }

    static listingsCont(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("brokeredgeinc.com"):
                outputClasses = "text-gray-700 md:mx-0 grid grid-cols-1 md:grid-cols-3 gap-4 p-4";
                break;
            default:
                outputClasses = "text-gray-700 md:mx-4 grid grid-cols-1 md:grid-cols-3 gap-4 p-4";
        }

        return outputClasses;
    }

    static standardPageCont(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("brokeredgeinc.com"):
                outputClasses = "text-gray-700 md:mx-4 py-2 md:py-4 px-4 md:px-1 ";
                break;
            default:
                outputClasses = "text-gray-700 md:mx-4 p-4";
        }

        return outputClasses;
    }

    static listing(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("brokeredgeinc.com"):
                outputClasses = "border border-gray-300 p-5 rounded-[7px] relative";
                break;
            default:
                outputClasses = "border border-gray-300 p-5 rounded-xl relative";
        }

        return outputClasses;
    }

    static listingPriceCont(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("brokeredgeinc.com"):
                outputClasses = "absolute right-0 bottom-0 rounded-br-[7px] rounded-tl bg-[#ededed] py-1 px-3";
                break;
            default:
                outputClasses = "absolute right-0 bottom-0 rounded-br-xl rounded-tl bg-[#ededed] py-1 px-3";
        }

        return outputClasses;
    }

    static businessListingHeading(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("brokeredgeinc.com"):
                outputClasses = "text-gray-700 md:mx-1 p-4";
                break;
            default:
                outputClasses = "text-gray-700 md:mx-4 p-4";
        }

        return outputClasses;
    }

    static topMenuCont(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("fairfieldbusinesslistings.com"):
                outputClasses = "bg-[#013258] space-between p-0 md:p-3 h-[23px] md:h-[38px] hidden md:flex";
                break;
            case host?.includes("iowacitybusinessesforsale.com"):
                outputClasses = "bg-[#200571] space-between p-0 md:p-3 h-[23px] md:h-[38px] hidden md:flex";
                break;
            default:
                outputClasses = "bg-[#04112b] space-between p-0 md:p-3 h-[23px] md:h-[38px] hidden md:flex";
        }

        return outputClasses;
    }

    static hamburgerBaseStyles(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("fairfieldbusinesslistings.com"):
                outputClasses = "tham tham-e-spin tham-w-8 absolute right-4 top-[30px] z-30 hover:opacity-100 block md:hidden";
                break;
            default:
                outputClasses = "tham tham-e-spin tham-w-8 absolute right-4 top-4 z-30 hover:opacity-100 block md:hidden";
        }

        return outputClasses;
    }

    static hamburgerInnerStyles(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("fairfieldbusinesslistings.com"):
                outputClasses = "tham-inner bg-[#316427]";
                break;
            case host?.includes("iowacitybusinessesforsale.com"):
                outputClasses = "tham-inner bg-[#200571]";
                break;
            default:
                outputClasses = "tham-inner bg-[#04112b]";
        }

        return outputClasses;
    }

    static mobileMenuInnerContBaseStyles(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("fairfieldbusinesslistings.com"):
                outputClasses = "pt-[60px] px-[20px] text-[#316427] delay-200 text-3xl transition-opacity flex flex-col gap-6";
                break;
            case host?.includes("iowacitybusinessesforsale.com"):
                outputClasses = "pt-[60px] px-[20px] text-[#200571] delay-200 text-3xl transition-opacity flex flex-col gap-6";
                break;
            default:
                outputClasses = "pt-[60px] px-[20px] text-[#04112b] delay-200 text-3xl transition-opacity flex flex-col gap-6";
        }

        return outputClasses;
    }
}



export default SiteSpecificStyles;