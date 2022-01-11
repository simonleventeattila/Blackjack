
async function  callApi (method, body, key){

    const response = await fetch('http://localhost:8080/https://blackjack.fuzz.me.uk/'+key, {
         mode: 'cors',
         method: method,
         body: JSON.stringify(body),
         headers: {'Content-Type': 'application/json'}
     });
    
return response;
}

export {callApi};