import axios from 'axios';

// var serviceUrl = "https://iotbackendapi.azurewebsites.net";
var serviceUrl = "http://localhost:5021";


export const CommonGetAxios = async (url, queryString) => {

    let originURL;
    const header = {
        "Content-type": "application/json; charset=utf-8",
        'Access-Control-Allow-Methods': '*',
        'Accept-Language': 'en-US'
    }

    if (queryString != null) {
        // originURL = serviceUrl + url + "?" + AESEncryption(queryString);
        originURL = serviceUrl + url + "?" + queryString;
    } else {
        originURL = serviceUrl + url;
    }

    return await axios.get(originURL, [header]).then(response => {
        console.log("axi respo ", response)
        if (response.statusText === 'Token Time Exceed') {
            window.logout.logout();
        } else {
            if (response.status >= 200 && response.status < 300) {
                // return (JSON.parse(AESDecryption(response.data)));
                return response.data;
            } else {
                return response.statusText;
            }
        }
    });
};

export const CommonPostAxios = async (url, queryString, body) => {
    // const encryptedResult = AESEncryption(JSON.stringify(body));
    const encryptedResult = JSON.stringify(body);
    let originURL;


    const options = {
        headers: {
            "Content-type": "application/json; charset=utf-8",
            'Access-Control-Allow-Methods': '*',
            'Accept-Language': 'en-US'
        }
    };

    if (queryString != null) {
        // originURL = serviceUrl + url + "?" + AESEncryption(queryString);
        originURL = serviceUrl + url + "?" + queryString;
    } else {
        originURL = serviceUrl + url;
    }

    return await axios.post(originURL, encryptedResult, options).then(response => {

        if (response.statusText === 'Token Time Exceed') {
            window.logout.logout();
        } else {
            if (response.status >= 200 && response.status < 300) {
                return (JSON.parse(response.data));
                // return (JSON.parse(AESDecryption(response.data)));
            } else {
                return response.statusText;
            }
        }
    });

}