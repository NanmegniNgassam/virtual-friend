import { Discussion } from "../models/Message"

const LOCAL_STORAGE_KEY = "vf-local-discussion"

/**
 * Fetch the whole content of the current discussion (incoming and outgoing messages)
 * 
 * @returns Discussion: An array of exchanged messages
 */
export const getDiscussionMessages = (): Discussion => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    
    if(storedData) {
        const data: Discussion = JSON.parse(storedData);

        return data;
    } else {
        // Initialize an empty discussion and save it
        const data: Discussion = [];
        storeDiscussion(data);

        return data;
    }
}

/**
 * Save data in the storage system
 */
export const storeDiscussion = (data: Discussion):void => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}