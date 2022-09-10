import axios from "axios";

const BASE_URL = "http://localhost:5000";

function postSignup(body){
    const promise = axios.post(`${BASE_URL}/sign-up`,body);
    return promise;
}

export { postSignup };
