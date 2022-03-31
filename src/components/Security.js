import jwt_decode from "jwt-decode";
const sign = require('jwt-encode');
var CryptoJS = require("crypto-js");

 /* JWT Encode */
export const Encode_jwt = (data,secret) =>{
const jwt = sign(data, secret);
return jwt
}

 /* JWT Dencode */
 export const Decode_jwt = (data) => {
    const decoded = jwt_decode(data);
return decoded
}

 /* Crypto Encode */
 export const Encode_crypto = (data,key) =>{
    const encoded = CryptoJS.AES.encrypt(data,key)
    return encoded
    }

 /* Crypto Decode */
 export const Decode_crypto = (data,key) => {
    const decoded = CryptoJS.AES.decrypt(data,key);
return decoded
}

 /* Blowfish Eencode */
export const Encode_des = (data,key) =>{
    const encoded = CryptoJS.DES.encrypt(data,key)
    return encoded
}

 /* Blowfish Decode */
 export const Decode_des = (data,key) => {
const decryptedData = CryptoJS.DES.decrypt(data,key)
return decryptedData
}