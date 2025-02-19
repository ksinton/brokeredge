import { create } from 'zustand';
import {addBusiness} from "./rest/addBusiness";

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
  updateBusiness: (business: Business) => Promise<object>;
};

export const useBusinessStore = create<State & Actions>()((set) => ({
    business: {
        name: "",
        phone: "",
        email: "",
        password: "",
    },
    updateBusiness: async (business: Business) : Promise<object> => {

        console.log("business", business);

        set(() => ({
            business: business
        }));

        const response: object = await addBusiness(business);

        return response;
    }

}))