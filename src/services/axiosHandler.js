import axios from "axios";

const BASE_URL = "http://localhost:5000";

function createHeaders() {
    const token = localStorage.getItem("mywallet");
    if(token){
        const config = {
            headers: {
            Authorization: `Bearer ${token}`
            }
        };
      return config;
    }
}

function getLogs(){
    const config = createHeaders();
    const promise = axios.get(`${BASE_URL}/main`,config);
    return promise;
}

function postSignup(body){
    const promise = axios.post(`${BASE_URL}/sign-up`,body);
    return promise;
}

function postLogin(body){
    const promise = axios.post(`${BASE_URL}/log-in`, body);
    return promise;
}

function postLogs(body){
    const config = createHeaders();
    const promise = axios.post(`${BASE_URL}/logs`,body,config);
    return promise;
}

export { postSignup, postLogin, getLogs, postLogs };
