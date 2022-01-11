
import {callApi} from './apiCommunication.js';

let balance = 1233;
const body = { balance:22 };

const response = await callApi('POST',body,'sit');
const data = await response.json();

const sessionId = data.sessionId;
const availableBetOptions = data.availableBetOptions;
if (response.status === 400){
    alert("Error");
}

console.log(sessionId); //debug
console.log(availableBetOptions); //debug

