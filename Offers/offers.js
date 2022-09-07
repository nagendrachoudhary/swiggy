
var arr = JSON.parse(localStorage.getItem("main array"))

arr.sort(function(a,b){
    if(a.itemDiscount>b.itemDiscount){
        return -1;}
        if(a.itemDiscount<b.itemDiscount){
        return 1;}
        return 0;
});
document.getElementById("arr_length").innerText = arr.length||0;
display();
function display(){
document.getElementById("main").innerText="";

arr.map(function(ele,index)
{
var div=document.createElement("div");
var imgdiv=document.createElement("div");
var img=document.createElement("img");
img.setAttribute("src",ele.itemImage);
img.setAttribute("alt","1");

imgdiv.append(img);

var div1=document.createElement("div");
var name=document.createElement("h4");
name.setAttribute("id","productname");
name.innerText=ele.itemName;

var itemtag=document.createElement("p");
itemtag.setAttribute("id","itemtag");
itemtag.innerText=ele.itemTag;

div1.append(name,itemtag);

var star=document.createElement("span");
star.setAttribute("class","fa fa-star checked");

var rating=document.createElement("p");

rating.append(star," ",ele.itemRating);


 
if(ele.itemRating>=4.2)
{
  rating.setAttribute("id","ratinggreen");
}
else{
  rating.setAttribute("id","ratingorange");
}

var i=document.createElement("i");
i.setAttribute("class","fa-solid fa-indian-rupee-sign");

var price=document.createElement("p");
price.setAttribute("id","price");
price.append(i," ",ele.itemPrice);

 
var div2=document.createElement("div");
div2.setAttribute("id","rating_and_price");
div2.append(rating,price);

var divv3=document.createElement("div");
divv3.setAttribute("id","parentdiscount");
var discount=document.createElement("p");
discount.setAttribute("id","discount");
discount.innerText=ele.itemDiscount;

var i1=document.createElement("i");
i1.setAttribute("class","fa-solid fa-percent")

var temp=document.createElement("p");
temp.innerText="off | ";

var coupon=document.createElement("p");
coupon.innerText=ele.itemCoupon_code;

divv3.append(discount,i1,temp,coupon);
divv3.setAttribute("id","discountoff")
var div4=document.createElement("div");
div4.setAttribute("id","parentofcart");
var cart=document.createElement("button");
cart.setAttribute("class","Addtocart");

cart.innerText="Add to Cart";
cart.addEventListener("click",function()
{
cartfun(index);
});
div4.append(cart);

div.append(imgdiv,div1,div2,divv3,div4);
document.getElementById("main").append(div);


});
}
