class SiteSpecificStyles {
    static headingContainer(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("iowacitybusinessesforsale.com"):
                outputClasses = "mx-0 md:mx-4 mt-4 flex h-[46px] md:h-[58px] bg-left-bottom text-[#200571]";
                break;
            default:
                outputClasses = "bg-gradient-to-t from-mobile-header-dark-background to-mobile-header-background md:bg-[url('/buy-a-business-in-fairfield-iowa.jpg')] mx-0 md:mx-4 flex h-[46px] md:h-[58px] bg-left-bottom";
        }

        return outputClasses;
    }

    static mainPageHeading(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("iowacitybusinessesforsale.com"):
                outputClasses = "block text-xl tracking-tight md:tracking-normal md:text-[24px]";
                break;
            default:
                outputClasses = "block text-m md:text-[20px]";
        }

        return outputClasses;
    }

    static sellYourBusinessCta(host: String): string {

        let outputClasses = "";

        switch (true) {
            case host?.includes("iowacitybusinessesforsale.com"):
                outputClasses = "border-[1px] text-white px-3 md:px-4 py-1 rounded-lg absolute bottom-[5px] md:bottom-[14px] left-auto md:right-[30px] right-[21px] text-[15px] md:text-lg whitespace-nowrap bg-[#200571]";
                break;
            default:
                outputClasses = "bg-transparent border-[1px] border-white border-solid px-3 md:px-6 py-1 rounded-lg absolute top-0 top-[calc(50%-9px)] md:top-[calc(50%-18px)] left-auto md:right-[30px] right-[21px] -translate-y-[22px] md:-translate-y-1/2 md:text-lg whitespace-nowrap";
        }

        return outputClasses;
    }

    static standardHeading(host: String): string {

        let outputClasses = "";

        switch (true) {
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
                outputClasses = "[&]:bg-[#200571]";
                break;
            default:
                outputClasses = "bg-brand-primary";
        }

        return outputClasses;
    }
}

export default SiteSpecificStyles;