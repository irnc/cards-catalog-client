/*fetch('http://localhost:3000/cards')  
  .then(  
    function(response) {  
      if (response.status !== 200) {  
        console.log('Looks like there was a problem. Status Code: ' +  
          response.status);  
        return;  
      }

      // Examine the text in the response  
      response.json().then(function(data) {  
        drawingAllCards(data);  
      });  
    }  
  )  
  .catch(function(err) {  
    console.log('Fetch Error :-S', err);  
  });*/

  //

function handeResponse(response) {
    if (response.status !== 200) {
        throw new Error('Looks like there was a problem. Status Code: ' +
        response.status);
    }

    // Examine the text in the response
    return response.json().then(function(data) {
        return data;
    });
}

module.exports = async function getData() {
    let data;

    try {
        const response = await fetch('http://localhost:3000/cards');
        data = await handeResponse(response);
    } catch (err) {
        console.log('Fetch Error :-S', err);
    }

    return data;
}