import axios from 'axios'
import { API_PATH, LOGIN } from '../../Type';



export function UserLogin(data) {

    const request = axios.post(API_PATH + "/login", data, {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + localStorage.getItem('token'),
            "Access-Control-Allow-Origin": '*',
        }
    }).then((res) => res.data);

    return {
        type: LOGIN,
        payload: request
    }
}