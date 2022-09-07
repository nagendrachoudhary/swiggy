var city=document.createElement("h5")
city.innerText=JSON.parse(localStorage.getItem('city'))
document.querySelector("#city").append(city)

var pagedeta=JSON.parse(localStorage.getItem('prodata'))
var img=document.createElement("img");
img.setAttribute("src",pagedeta.img)
document.getElementById("img").append(img)
var itemname=document.createElement("h1")
itemname.innerText=pagedeta.name;
document.getElementById("div1").append(itemname)
var itemTag=document.createElement("h4")
itemTag.innerText=pagedeta.tag;
document.getElementById("div1").append(itemTag)
var itemcity=document.createElement("h5")
var city=JSON.parse(localStorage.getItem('city'))
itemcity.innerText=city
document.getElementById("div1").append(itemcity)
var itemRating=document.createElement("h2")
itemRating.innerText=pagedeta.rating;
document.getElementById("div2").append(itemRating)
var price=document.createElement("h2")
price.innerText=pagedeta.price;
document.getElementById("div2").append(price)
var time=document.createElement("h2")
time.innerText='32 mins';
document.getElementById("div2").append(time)
