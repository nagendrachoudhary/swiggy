var arr=[

    {
      itemName: "Guptaji Shakahari Bhojnalay",
      itemTag:"North Indian",
      itemRating:"3.5",
      itemPrice:"150",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jb9iyqwlhuyxyvb6zwnz",
      itemCoupon_code:"USETRY30",

    },
    {
      itemName: "Manohar Dairy and Restaurant",
      itemTag:"Sweets",
      itemRating:"4.3",
      itemPrice:"300",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/v6elbsatlbi93xeq0g3c",
      itemCoupon_code:"USETRY30",
    },
    {
      itemName: "Anjani Bhojnalay",
      itemTag:"North Indian",
      itemRating:"4.8",
      itemPrice:"200",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/u7hwixd7b4papoe2hwdu",
      itemCoupon_code:"USETRY30",
    },
    {
      itemName: "Burger King",
      itemTag:"Burger",
      itemRating:"5.0",
      itemPrice:"160",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yzdmieopbbypvdfybrur",
      itemCoupon_code:"USETRY30",
    },
    {
      itemName: "Biryani By Kilo",
      itemTag:"Biryani",
      itemRating:"3.3",
      itemPrice:"350",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qjlxj9scdfjn6jlytt1x",
      itemCoupon_code:"USETRY30",
    },
    {
      itemName: "Idli & More",
      itemTag:"South Indian",
      itemRating:"3.0",
      itemPrice:"180",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yti6qdbmzawis39mjfni",
      itemCoupon_code:"USETRY30",
    },
    {
      itemName: "Rice Bowl Thai & Chinese",
      itemTag:"chinese",
      itemRating:"2.3",
      itemPrice:"200",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/tcg9zzpjyaopkhmdxgus",
      itemCoupon_code:"USETRY30",
    },
    {
      itemName: "6 Veg Cheese Pizza",
      itemTag:"pizzas",
      itemRating:"4.9",
      itemPrice:"200",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
      itemCoupon_code:"USETRY30",
    },
    {
      itemName:"Sagar Gaire - Kolar",
      itemTag:"cheese.",
      itemRating:"4.0",
      itemPrice:"200",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/cxgudmo1mrxz7v9jnjz1",
      itemCoupon_code:"USETRY30",
    }, {
        itemName: "6 Veg Cheese Pizza",
        itemTag:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
        itemRating:"4.2",
        itemPrice:"200",
        itemDiscount:"30",
        itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
        itemCoupon_code:"USETRY30",
      },
      {
        itemName: "6 Veg Cheese Pizza",
        itemTag:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
        itemRating:"4.1",
        itemPrice:"200",
        itemDiscount:"30",
        itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
        itemCoupon_code:"USETRY30",
      },
      {
        itemName: "6 Veg Cheese Pizza",
        itemTag:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
        itemRating:"4.6",
        itemPrice:"200",
        itemDiscount:"30",
        itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
        itemCoupon_code:"USETRY30",
      },
  
    ];
    
    document.getElementById("search").append("  ","Search");
    document.getElementById("navcart").append("  ","Cart");
 

  display();
    function display(){
      document.getElementById("itemsdetails").innerText="";
 
    
   
 
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
      document.querySelector("#itemsdetails").append(div);


  });
}
 var addcart=[];
    
    function cartfun(ind)
    {
     var a=arr.filter(function(ele,index)
     {
         return index===ind;
     });

    addcart.push(a[0]);
    
    localStorage.setItem("cart",JSON.stringify(addcart));
    

    }

    function rating_sort()
    {
      event.preventDefault();
      arr.sort(function(a,b){
        if(a.itemRating>b.itemRating)
        {
          return -1;
        }
        if(a.itemRating<b.itemRating)
        {
          return 1;
        }
        return 0;
      })
      display();
    }
    function low_to_high_sort()
    {
      event.preventDefault();
      arr.sort(function(a,b){
        if(a.itemPrice>b.itemPrice)
        {
          return 1;
        }
        if(a.itemPrice<b.itemPrice)
        {
          return -1;
        }
        return 0;
      })
      display();
    }
    function high_to_low_sort()
    {
      event.preventDefault();
      arr.sort(function(a,b){
        if(a.itemPrice>b.itemPrice)
        {
          return -1;
        }
        if(a.itemPrice<b.itemPrice)
        {
          return 1;
        }
        return 0;
      })
      display();
    }
 

    
     


    
     
 



