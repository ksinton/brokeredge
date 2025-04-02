import {Business} from "../store";

async function postBusiness(business:Business) {
    const options = {
        method: "POST",
        body: JSON.stringify({
            businessName: business.name,
            phone: business.phone,
            email: business.email,
            password: business.password,
        }),
        headers: {
            accept: "application/json",
            "Content-Type": "application/json"
        },
    };

    try {
        // @ts-ignore
        let response = await fetch("http://brokeredge.com/api/business", options,);
        return await response.json();
    } catch(err: any) {
        console.error("Fetch Error", err);
        return { success: false, error: "Failed to connect to server" };
    }
}

export async function addBusiness(business: Business): Promise<object> {
    console.log("over here before save inside addbusiness");
    return await postBusiness(business);
}