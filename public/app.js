
const body={
    balance:22
};

const response = await fetch('http://localhost:8080/https://blackjack.fuzz.me.uk/sit', {
   // mode: 'cors',
    method: 'POST',
    body: JSON.stringify(body),
    headers: {'Content-Type': 'application/json'}
});
   

const data = await response.json();


const sessionId = data.sessionId;
const availableBetOptions = data.availableBetOptions;

console.log(sessionId); //debug
console.log(availableBetOptions);