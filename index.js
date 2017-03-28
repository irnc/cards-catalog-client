function drawingAllCards(data) {

  data.forEach((card) => {

    var table = document.createElement("table");

    var th1 = document.createElement("th")
    var th2 = document.createElement("th")

    var tr = document.createElement("tr");
    
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");

    th1.innerText="name";
    th2.innerText="phone"

    td1.innerText=card.name;
    td2.innerText=card.contacts.phone;

    tr.appendChild(td1);
    tr.appendChild(td2);
    
    table.appendChild(th1);
    table.appendChild(th2);
    table.appendChild(tr);

    document.body.insertBefore(table, document.body.firstChild);

  })
}

fetch('http://localhost:3000/cards')  
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
  });