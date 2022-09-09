var cart_count = JSON.parse(localStorage.getItem("cart"))||[];
var arr = JSON.parse(localStorage.getItem("main array"))

arr.sort(function(a,b){
    if(a.itemDiscount>b.itemDiscount){
        return -1;}
        if(a.itemDiscount<b.itemDiscount){
        return 1;}
        return 0;
});
document.getElementById("cart_count").innerText = cart_count.length||0;
display();
function display(){
document.querySelector(".main").innerText="";
document.querySelector(".Restaurent").innerText = "";
var restaurent = document.querySelector(".Restaurent");
var p1 = document.createElement("p");
p1.innerText = "All offers (1543)";
var p2 = document.createElement("p");
p2.innerText = "All offers and deals from restaurants near you";
restaurent.append(p1,p2);
arr.map(function(ele,index)
{
var div=document.createElement("div");
var imgdiv=document.createElement("div");
var img=document.createElement("img");
img.setAttribute("src",ele.itemImage);
img.setAttribute("alt","1");
img.addEventListener("click",function()
{
  var product=arr[index];
  localStorage.setItem("product_details",JSON.stringify(product));
  location.href='../productdetails/productdetails.html';
})
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
cart.innerText = (cart_count.includes(ele))?"Remove":"Add to Cart";
cart.addEventListener("click",function()
{
  if(cart.innerText==="Add to Cart"){
cart_count.push(ele);
localStorage.setItem("cart",JSON.stringify(cart_count));
document.getElementById("cart_count").innerText = cart_count.length||0;
cart.innerText = "Remove"
cart.setAttribute("class","Remove");
  }else if(cart.innerText==="Remove"){
cart_count.splice(ele,1);
localStorage.setItem("cart",JSON.stringify(cart_count));
document.getElementById("cart_count").innerText = cart_count.length||0;
cart.innerText = "Add to Cart";
cart.setAttribute("class","Addtocart");
  }
});
div4.append(cart);

div.append(imgdiv,div1,div2,divv3,div4);
document.querySelector(".main").append(div);

});
}
var ans=JSON.parse(localStorage.getItem("city")) || "";
    if(ans.length==0)
    {
      document.getElementById("location2").innerText="Maharana Pratap Square Delhi";
    }
    else{
      document.getElementById("location2").innerText=ans;
    }
