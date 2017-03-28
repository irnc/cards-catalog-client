const getData = require('./getData.js');

const dataPromise = getData();

dataPromise.then(function (data) {
  drawingAllCards(data);
});

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