import axios from "axios";
import { httpsStatusMessages } from "./http-status-messages";

const baseUrl = import.meta.env.VITE_API_URL;

export async function fetchData(url) {
    try {
        const res = await axios.get(`${baseUrl}${url}`);
        return res.data;
    } catch (error) {
        console.error(httpsStatusMessages.error, error);
        throw new Error(httpsStatusMessages.error);
    }
}
