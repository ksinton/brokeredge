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

async function fetchBusinesses(host :String, protocol: String) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json"
        },
    };

    try {
        // @ts-ignore
        let response = await fetch(`${protocol}://api:8000/businesses/${host}`, options,);
        return await response.json();
    } catch(err: any) {
        console.error("Fetch Error", err);
        return { success: false, error: "Failed to connect to server" };
    }
}

export async function getBusinesses(host :String, protocol: String): Promise<object> {
    console.log("over here before save inside getBusinesses888888");
    return await fetchBusinesses(host, protocol);
}

async function fetchBusiness(route :String, protocol: String) {
    const options = {
        method: "GET",
        headers: {
            accept: "application/json",
            "Content-Type": "application/json"
        },
    };

    try {
        // @ts-ignore

        const fetchUrl = `${protocol}://api:8000/business/${route}`;

        console.log("fetchUrl55555555555555", fetchUrl);

        let response = await fetch(fetchUrl, options,);

        return await response.json();
    } catch(err: any) {
        console.error("Fetch Error", err);
        return { success: false, error: "Failed to connect to server" };
    }
}

export async function getBusiness(route :String, protocol: String): Promise<object> {
    console.log("over here before save inside getBusinesses888888");
    return await fetchBusiness(route, protocol);
}