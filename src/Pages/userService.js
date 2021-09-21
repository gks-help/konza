
const GLOBAL = require('../Globals')
;
export const userService = {
    login,register,active,factorsSMS,factorsEmail,factorsVerify,writes
};

function login(username, password) {   
    const  requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization':'SSWS 00jehVspoSOXG9AkqPtwHo4zmAaS2PcZ6OYHkYhkjP',
             },
            body: JSON.stringify({ 
                username:username, 
                password:password,
                "options": {
                    "multiOptionalFactorEnroll": true,
                    "warnBeforePasswordExpired": true
                  } })
        };    
        return fetch(GLOBAL.API_URL+`api/v1/authn`, requestOptions)
            .then(handleResponse)
            .then(user => {
                return user;
        });
}
 
function register(data) {   
    const  requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization':'SSWS 00jehVspoSOXG9AkqPtwHo4zmAaS2PcZ6OYHkYhkjP',
             },
            body: JSON.stringify(data)
        };    
        return fetch(GLOBAL.API_URL+`api/v1/users?activate=false`, requestOptions)
            .then(handleResponse)
            .then(user => {
                return user;
        });
}
 
function active(data) {   
    const  requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization':'SSWS 00jehVspoSOXG9AkqPtwHo4zmAaS2PcZ6OYHkYhkjP',
             },
            body: JSON.stringify(data)
        };  
        return fetch(GLOBAL.API_URL+`api/v1/users/${data}/lifecycle/activate`, requestOptions)
            .then(handleResponse)
            .then(user => {
                return user;
        });
}
 
function factorsSMS(data) {   
    const  requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization':'SSWS 00jehVspoSOXG9AkqPtwHo4zmAaS2PcZ6OYHkYhkjP',
             },
            body: JSON.stringify(data)
        };  
        return fetch(GLOBAL.API_URL+`api/v1/authn/factors/${data.factorId}/verify`, requestOptions)
            .then(handleResponse)
            .then(user => {
                return user;
        });
}
 
function factorsEmail(data) {   
    const  requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization':'SSWS 00jehVspoSOXG9AkqPtwHo4zmAaS2PcZ6OYHkYhkjP',
             },
            body: JSON.stringify(data)
        };  
        return fetch(GLOBAL.API_URL+`api/v1/authn/factors/${data.factorId}/verify`, requestOptions)
            .then(handleResponse)
            .then(user => {
                return user;
        });
}

function factorsVerify(data) {   
    const  requestOptions = {
            method: 'POST',
            headers: { 
                'Accept': 'application/json', 
                'Content-Type': 'application/json',
                'Authorization':'SSWS 00jehVspoSOXG9AkqPtwHo4zmAaS2PcZ6OYHkYhkjP',
             },
            body: JSON.stringify(data)
        };  
        return fetch(GLOBAL.API_URL+`api/v1/authn/factors/${data.factorId}/verify`, requestOptions)
            .then(handleResponse)
            .then(user => {
                return user;
        });
}

function writes() {   
    const data={email:"arima.com"}
    return data;
}
 
function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                    //auto logout if 401 response returned from api
                    //logout();
                    //location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }

        return data;
    });
}
// 008Dm5U9-PaznGHl3NGPUXb7iaaaZp-4t6xGs0n0xo