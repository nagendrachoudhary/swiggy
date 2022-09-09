var addcart=JSON.parse(localStorage.getItem("cart")) || [];
changeno();
var city=document.createElement("h5")
city.innerText=JSON.parse(localStorage.getItem('city'))
document.querySelector("#city").append(city)

var count=JSON.parse(localStorage.getItem('no_of_count'))
console.log(count)

var pagedeta=JSON.parse(localStorage.getItem('product_details'))||[]
var img=document.createElement("img");
img.setAttribute("src",pagedeta.itemImage)
document.getElementById("img").append(img)
var itemname=document.createElement("h1")
itemname.innerText=pagedeta.itemName;
document.getElementById("div1").append(itemname)
var itemTag=document.createElement("h4")
itemTag.innerText=pagedeta.itemTag;
document.getElementById("div1").append(itemTag)
var itemcity=document.createElement("h5")
var city=JSON.parse(localStorage.getItem('city'))
itemcity.innerText=city
document.getElementById("div1").append(itemcity)
var itemRating=document.createElement("h2")
itemRating.innerText=pagedeta.itemRating+"  "+"|"+"  ";
document.getElementById("div2").append(itemRating)
var price=document.createElement("h2")
price.innerText=pagedeta.itemPrice+"  "+"|"+"  ";
document.getElementById("div2").append(price)
var time=document.createElement("h2")
time.innerText=pagedeta.deliveryTime+""+"min";
document.getElementById("div2").append(time)

var cart=document.createElement("button")
var div67=document.createElement("div")
cart.setAttribute("id","cart")
cart.innerText="ADD TO CART"
div67.append(cart)
cart.addEventListener("click",function(){
    cartfun(pagedeta)
})

document.getElementById("div2").append(div67)




// bottom part ->
var rec=JSON.parse(localStorage.getItem("main array"))
var div=document.createElement("div")
var h3=document.createElement("h3")
h3.innerText="Recommended"
var h2=document.createElement("h4")
h2.innerText= "ITEMS"+" "+rec.length


div.append(h3,h2)
document.getElementById("products").append(div)
rec.map(function(el,index){
    var div1=document.createElement("div")
    var h2=document.createElement("h3")
    h2.innerText=el.itemName;
    var h22=document.createElement("h3")
    h22.innerText=el.itemRating;
    div1.append(h2,h22)
    var div2=document.createElement("div")
    var img=document.createElement("img");
    img.setAttribute("src",el.itemImage)
    div2.append(img)
    var div3=document.createElement("div")
    div3.setAttribute("id","div3")
    div3.append(div1,div2)
    document.getElementById("products").append(div3)
    img.addEventListener("click",function()
      {
        var product=el;
        localStorage.setItem("product_details",JSON.stringify(product));
        location.href='../productdetails/productdetails.html';
        display()
      })
        
})


    function cartfun(pagedeta)
    {
    addcart.push(pagedeta);
    localStorage.setItem("cart",JSON.stringify(addcart));
    changeno();
    }
    function changeno(){
         document.querySelector(".button>p").innerText=addcart.length;
         display()
    }
   function display(){
   if(addcart.length==='null'){
    var h1=document.createElement("h1");
    h1.innerText="Cart Empty"
    document.querySelector("#cartsitems").append(h1)
    var img=document.createElement("img")
    img.setAttribute("src","https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_480/Cart_empty_-_menu_2x_ejjkf2")
    img.setAttribute("id","cartimg")
    document.querySelector("#cartsitems").append(img)
    var p=document.createElement("p");
    p.innerText="Good food is always cooking! Go ahead, order some yummy items from the menu."
    document.querySelector("#cartsitems").append(p)
   }
   else{
    document.querySelector("#cartsitems").innerText=""
        var div=document.createElement("div");
        div.setAttribute("id","carttemple")
        var h1=document.createElement("h1");
         h1.innerText="Cart"
         var p=document.createElement("p");
         p.innerText="ITEM LIST"
         div.append(h1,p)
         document.querySelector("#cartsitems").append(div)
         var total=0;
         var div1=document.createElement("div");
         div1.setAttribute("class","prices")
         dispalycart();
         function dispalycart(){
    addcart.map(function(el,index){     
        var h3=document.createElement("h3")
         h3.innerText=el.itemName;
        var price=document.createElement("h3")
         price.innerText='$'+el.itemPrice;
         var deletebutton=document.createElement("h3")
         deletebutton.innerText="remove"
         deletebutton.addEventListener("click",function(){
         addcart.splice(index, 1);
          localStorage.setItem("cart",JSON.stringify(addcart))
            div1.innerHTML="";
            dispalycart();
            changeno();
         })
         div1.append(h3,price,deletebutton)
         document.querySelector("#cartsitems").append(div1)
         total=+total+(+el.itemPrice)
         
       })
      }
       var br=document.createElement("hr")
       document.querySelector("#cartsitems").append(br)


       var div=document.createElement("div")
       div.setAttribute("id","total")
       var div1=document.createElement("div")
       var h1=document.createElement("h1")
       var p=document.createElement("p")
       h1.innerText="Subtotal"
       p.innerText="Extra charges may apply"
       div1.append(h1,p)
       var div2=document.createElement("div")
       var h1=document.createElement("h1")
       h1.innerText="$"+(+total)
       var button=document.createElement("button")
       button.innerText="Checkout"
       button.setAttribute("id","button")
       button.addEventListener("click",function(){
        location.href='../cart/cart.html'
       })
       div2.append(h1)
       div2.setAttribute("id","totalprice")
       div.append(div1,div2)
       document.querySelector("#cartsitems").append(div)
       div3=document.createElement("div")
       div3.append(button)
       document.querySelector("#cartsitems").append(button)
       
      
       
   }
   }