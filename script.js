var total = 0;

var groceryList = [
  {name: 'TV Dinners',
   price: 2.00},
  {name: 'Avocados',
   price: 1.00},
  {name: 'Salmon filets',
   price: 14.00},
  {name: 'Meatballs',
   price: 5.00},
  {name: 'Chips',
   price: 3.00}];

var receiptPaper = document.createElement("div");
receiptPaper.id = "receiptContainer";
document.body.appendChild(receiptPaper);



groceryList.forEach(function(groceryList) {
  total += groceryList.price;

// var addItem = document.getElementById('addStuff');
// document.getElementById('addStuff').onclick = function (){
//   var text = document.getElementById('moreFood').value;
//   var addToList = "<li>" + text + "</li>";
//   document.getElementById('lists').appendChild('addToList')
// }





  var itemInfo = document.createElement('li');
  itemInfo.id = 'itemsInfo'
  itemInfo.textContent = groceryList.name;
  var uList = document.getElementById('lists');
  document.getElementById('lists').appendChild(itemInfo);
  var anotherSpan = document.createElement('li');
  anotherSpan.id = 'spanTwo'
  anotherSpan.textContent = "$" +  groceryList.price;
  document.getElementById('lists').appendChild(anotherSpan);
  });
  var grandTotal = document.createElement("div");
  grandTotal.id = 'grandTotal2';
  document.body.appendChild(grandTotal);

var displayTotal = document.createElement('p');
  displayTotal.id = 'displayTotal'
  displayTotal.textContent = "Grand Total: " + "$" + total;
  grandTotal2.appendChild(displayTotal);

var newDiv = document.createElement('div');
newDiv.id = 'footerDiv'
document.body.appendChild(newDiv);
  var footerText = document.createElement("p");
  footerText.textContent = "Thank you for coming, have a great day!";
  footerDiv.appendChild(footerText);
