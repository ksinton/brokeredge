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
}

export default SiteSpecificContent;