import { create } from 'zustand';
import {addBusiness} from "./rest/addBusiness";
import { headers } from 'next/headers'

export type Business = {
    name: string;
    phone: string;
    email: string;
    password: string;
};

export type State = {
    business: Business;
};

export type Actions = {
  updateBusiness: (host: String, business: Business) => Promise<object>;
};

export const useBusinessStore = create<State & Actions>()((set) => ({

    business: {
        name: "",
        phone: "",
        email: "",
        password: "",
    },


    updateBusiness: async (host: String,  business: Business) : Promise<object> => {

        console.log("business", business);

        set(() => ({
            business: business
        }));

        const response: object = await addBusiness(host, business);

        return response;
    }

}))