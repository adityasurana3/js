import axios from "axios"
import {atom, selector} from "recoil"


export const notifications = atom({
    key: "networkAtom",
    default: selector({
        key: "networkAtomSelector",
        get: async () =>{
            const res = await axios.get("https://sum-server.100xdevs.com/notifications/")
            return res.data
        }
    })
})


export const totalNotification = selector({
    key: "totalNotification",
    get: ({get}) =>{
        const allNotification =  get(notifications)
        return allNotification.network + allNotification.jobs + allNotification.messaging + allNotification.notifications
    }
})