import {axiosService} from "./axios.service";
import {urls} from "../configs";


const accessTokenKey = 'access';
const refreshTokenKey = 'refresh';

const authService = {
    register:(user) => axiosService.post(urls.users, user),
    login: (user) => axiosService.post(urls.auth.login, user),
    refresh:(refresh)=>axiosService.post(urls.auth.refresh, {refresh}),

    setToken: ({access, refresh})=>{
        localStorage.setItem(accessTokenKey, access);
        localStorage.setItem(refreshTokenKey, refresh);
    },
    deleteToken:()=>{
        localStorage.removeItem(accessTokenKey);
        localStorage.removeItem(refreshTokenKey);
    },
    getAccessToken:()=>localStorage.getItem(accessTokenKey),
    getRefreshToken:()=>localStorage.getItem(refreshTokenKey)
}

export {authService};