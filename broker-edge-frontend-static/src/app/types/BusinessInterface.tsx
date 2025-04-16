export default interface businessInterface {
    name: string;
    price: string;
    industry: string;
    subIndustry: string;
    sellerFinancing: string;
    reasonForSelling: string;
    phone?: string;
    email?: string;
    website?: string;
    assistanceToBuyer: string;
    startDate: string;
    numberOfImages: number,
    images: Array<string>,
    description: string;
}