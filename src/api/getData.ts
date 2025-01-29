import axios from "axios";
import {BACKEND_URL} from "../consts.ts";
import {APIResponse} from "./types.ts";

const getData = async (): Promise<APIResponse> => {
    const response = await axios.get(BACKEND_URL + "/api");
    if (!response.data) {
        throw new Error('Data is undefined');
    }
    return response.data;
};

export default getData;