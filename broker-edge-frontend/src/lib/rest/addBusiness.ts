import {Business} from "../store";

async function postBusiness(host :String, business:Business) {
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
        let response = await fetch(`/api/business`, options,);
        return await response.json();
    } catch(err: any) {
        console.error("Fetch Error", err);
        return { success: false, error: "Failed to connect to server" };
    }
}

export async function addBusiness(host :String, business: Business): Promise<object> {
    console.log("over here before save inside addbusiness");
    return await postBusiness(host, business);
}