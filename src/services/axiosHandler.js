import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createHeaders() {
    const auth = JSON.parse(localStorage.getItem("mywallet"));
    if(auth){
        const config = {
            headers: {
            Authorization: `Bearer ${auth.token}`
            }
        };
      return config;
    }
}


function postSignup(body){
    const promise = axios.post(`${BASE_URL}/sign-up`,body);
    return promise;
}

function postLogin(body){
    const promise = axios.post(`${BASE_URL}/log-in`, body);
    return promise;
}

export { postSignup, postLogin };
