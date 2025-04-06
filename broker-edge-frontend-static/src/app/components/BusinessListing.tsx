import BusinessInterface from "../types/BusinessInterface";

export default function BusinessListing({BusinessData} : { BusinessData: BusinessInterface} )
{

    return (
        <div className="text-gray-700 md:mx-4 p-4">
            <h1 className="text-2xl text-brand-primary">{BusinessData.name}</h1>

            <div className="flex flex-col md:flex-row gap-8 pt-5">
                <div className="h-32 w-32 bg-gray-300"></div>
                <div className="flex flex-col gap-2">
                    <div><span className="font-bold">Desired Price</span> {BusinessData.price}</div>
                    <div className=""><span className="font-bold">Industry</span> {BusinessData.industry}</div>
                    <div className=""><span className="font-bold">Sub Industry</span> {BusinessData.subIndustry}</div>
                    <div className=""><span
                        className="font-bold">Reason for selling</span> {BusinessData.reasonForSelling}</div>
                    <div className=""><span
                        className="font-bold">Assistance to buyer</span> {BusinessData.assistanceToBuyer}</div>
                </div>
                <div className="flex flex-col gap-2">
                    <div className=""><span className="font-bold">Seller Financing</span> {BusinessData.sellerFinancing}
                    </div>
                    <div className=""><span className="font-bold">Business Phone</span> {BusinessData.phone}</div>
                    <div className=""><span className="font-bold">Business Email</span> {BusinessData.email}</div>
                    <div className=""><span className="font-bold">Website</span> {BusinessData.website}</div>
                    <div className=""><span className="font-bold">Business Start Date</span> {BusinessData.startDate}
                    </div>
                </div>

            </div>

            <div className="pt-10 pb-[150px] leading-[28px]">
                {BusinessData.description}
            </div>

        </div>
    )

}