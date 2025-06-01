class SiteSpecificContent {
    static siteName(host: String): string {

        let output = "";

        switch (true) {
            case host?.includes("iowacitybusinessesforsale.com"):
                output = "Iowa City Businesses for Sale";
                break;
            default:
                output = "Fairfield Business Listings";
        }

        return output;
    }

    static siteLocation(host: String): string {

        let output = "";

        switch (true) {
            case host?.includes("iowacitybusinessesforsale.com"):
                output = "Iowa City";
                break;
            default:
                output = "Fairfield, Iowa";
        }

        return output;
    }

    static mainPageTitle(host: String): string {

        let output = "";

        switch (true) {
            case host?.includes("brokeredgeinc.com"):
                output = "Businesses Listed for Sale";
                break;
            default:
                output = "Buy a Local Business";
        }

        return output;
    }
}

export default SiteSpecificContent;