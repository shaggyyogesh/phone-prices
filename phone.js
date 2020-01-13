
var phones = [
    {company : "apple",model:"iphone 11 pro",price : 115000},
    {company : "vivo",model:"vivo v5s",price : 95000},
    {company : "oneplus",model:"one T",price : 85699},
    {company : "htc",model:"htc 8s",price : 48500},
    {company : "oppo",model:"reno2",price : 24000},

];
displayphones(); 

function myFunction() {
  phones.sort(function(a, b){return a.price - b.price});
  displayphones();
}
function displayphones() {
  document.getElementById("demo").innerHTML = 
  phones[0].company+" "+phones[0].model+" "+phones[0].price+"<br>"+
  phones[1].company+" "+phones[1].model+" "+phones[1].price+"<br>"+
  phones[2].company+" "+phones[2].model+" "+phones[2].price+"<br>"+
  phones[3].company+" "+phones[3].model+" "+phones[3].price+"<br>"+
  phones[4].company+" "+phones[4].model+" "+phones[4].price;

}
var phones = [
    {company : "apple",model:"iphone 11 pro",price : 115000},
    {company : "vivo",model:"vivo v5s",price : 95000},
    {company : "oneplus",model:"one T",price : 85699},
    {company : "htc",model:"htc 8s",price : 48500},
    {company : "oppo",model:"reno2",price : 24000},

];
displayphones(); 

function myprice() {
  phones.sort(function(a, b){ 
      var x = a.company.toLowerCase();
    var y = b.company.toLowerCase();
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  });
   displayphones();
}
function displayphones() {
  document.getElementById("remo").innerHTML = 
  phones[0].company+" "+phones[0].model+" "+phones[0].price+"<br>"+
  phones[1].company+" "+phones[1].model+" "+phones[1].price+"<br>"+
  phones[2].company+" "+phones[2].model+" "+phones[2].price+"<br>"+
  phones[3].company+" "+phones[3].model+" "+phones[3].price+"<br>"+
  phones[4].company+" "+phones[4].model+" "+phones[4].price;

}