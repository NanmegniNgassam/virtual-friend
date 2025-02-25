import { Discussion } from "../models/Message"

const LOCAL_STORAGE_KEY = "vf-local-discussion"

/**
 * Fetch the whole content of the current discussion (incoming and outgoing messages)
 * 
 * @returns Discussion: An array of exchanged messages
 */
export const getAllDiscussionMessages = (): Discussion => {
    const storedData = getStoredData();

    return storedData.discussion;
}

/**
 * Fetch the app settings
 * 
 * @returns settings: An config object for the global app
 */
export const getSettings = (): VFSettings => {
    const storedData = getStoredData();

    return storedData.settings;
}

/**
 * Fetch all app used data
 * 
 * @returns VFStorage: Object gathering the discussion and the settings
 */
export const getStoredData = ():VFStorage => {
    const storedData = localStorage.getItem(LOCAL_STORAGE_KEY)
    
    if(storedData) {
        const data: VFStorage = JSON.parse(storedData);

        return data;
    } else {
        const data: VFStorage = {
            discussion: [],
            settings: {
                contact: {
                    avatar: new Blob(),
                    name: 'Virtual Friend'
                },
                userName: ''
            }
        };
        storeData(data);

        return data;
    }
}

/**
 * Save data in the storage system
 */
export const storeData = (data: VFStorage):void => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(data));
}

interface VFStorage {
    discussion: Discussion;
    settings: VFSettings;
}

interface VFSettings {
    contact: {
        name: string;
        avatar: Blob;
    },
    userName: string;
}