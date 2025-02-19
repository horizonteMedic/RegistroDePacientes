import { URLAzure } from "../config/config"

export const getFetch = (url, token) => {
    
    const options = {
        method: 'GET',
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
   
    return fetch(URLAzure+url,options).then(res => res.json()).then(response => response) 
}
