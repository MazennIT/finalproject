let addtocart=document.getElementsByClassName("allproductsbutton")
console.log(addtocart)
var total_price=[110,31,72,63,72,72,72,72,72,72,63,47,72,47,31,31,63,47,31,41,63,94,31,22,24,24,94,31,22,25,94,22,22,16,22,22,16,63,41,47,31,63,47,47,47,47,47,85,79,63,110,63,63,79,72,63,94]
var finalprice=document.getElementById("totalpricee")
for(let i=0;i<total_price.length;i++){
    addtocart[i].addEventListener('click',function(){
    finalprice.value=Number(finalprice.value)+Number(total_price[i]);})}