interface industriesInterface { [key: number]: industry }
interface subIndustriesInterface { [key: number]: string }
interface reasonsForSellingInterface { [key: number]: string }
interface sellerFinancingInterface { [key: number]: string }
interface successorOnboardingInterface { [key: number]: string }
interface sitesInterface { [key: string]: number }

let lists : listsInterface = {
    industries: {},
    subIndustries: {},
    reasonsForSelling: {},
    sellerFinancing: {},
    successorOnboarding: {},
    sites: {},
};

export interface industryDataInterface {
    id: number;
    name: string;
}

export interface subIndustryDataInterface {
    id: number;
    industryId: number;
    name: string;
}

export interface reasonsForSellingDataInterface {
    id: number;
    name: string;
}

export interface sellerFinancingDataInterface {
    id: number;
    name: string;
}

export interface successorOnboardingDataInterface {
    id: number;
    name: string;
}

export interface sitesDataInterface {
    id: number;
    url: string;
}

export interface industry {
    name: string;
    subIndustries: string[];
}

export interface listsInterface {
    industries: industriesInterface;
    subIndustries: subIndustriesInterface;
    reasonsForSelling: reasonsForSellingInterface;
    sellerFinancing: sellerFinancingInterface;
    successorOnboarding: successorOnboardingInterface;
    sites: sitesInterface;
}