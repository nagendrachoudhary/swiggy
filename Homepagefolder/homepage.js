var arr=[

    {
      itemName: "Guptaji Shakahari Bhojnalay",
      itemTag:"North Indian",
      itemRating:"3.5",
      itemPrice:"150",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/jb9iyqwlhuyxyvb6zwnz",
    },
    {
      itemName: "Manohar Dairy and Restaurant",
      itemTag:"Sweets",
      itemRating:" 4.3",
      itemPrice:"300",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/v6elbsatlbi93xeq0g3c",
    },
    {
      itemName: "Anjani Bhojnalay",
      itemTag:"North Indian",
      itemRating:" 4.8",
      itemPrice:"200",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/u7hwixd7b4papoe2hwdu",
    },
    {
      itemName: "Burger King",
      itemTag:"Burger",
      itemRating:"5.0",
      itemPrice:"160",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yzdmieopbbypvdfybrur",
    },
    {
      itemName: "Biryani By Kilo",
      itemTag:"Biryani",
      itemRating:" 4.3",
      itemPrice:"350",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/qjlxj9scdfjn6jlytt1x",
    },
    {
      itemName: "Idli & More",
      itemTag:"South Indian",
      itemRating:"5.0",
      itemPrice:"180",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/yti6qdbmzawis39mjfni",
    },
    {
      itemName: "6 Veg Cheese Pizza",
      itemTag:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
      itemRating:" 4.3",
      itemPrice:"200",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
    },
    {
      itemName: "6 Veg Cheese Pizza",
      itemTag:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
      itemRating:" 4.3",
      itemPrice:"200",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
    },
    {
      itemName: "6 Veg Cheese Pizza",
      itemTag:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
      itemRating:" 4.3",
      itemPrice:"200",
      itemDiscount:"30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
    }, {
        itemName: "6 Veg Cheese Pizza",
        itemTag:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
        itemRating:" 4.3",
        itemPrice:"200",
        itemDiscount:"30",
        itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
      },
      {
        itemName: "6 Veg Cheese Pizza",
        itemTag:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
        itemRating:" 4.3",
        itemPrice:"200",
        itemDiscount:"30",
        itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
      },
      {
        itemName: "6 Veg Cheese Pizza",
        itemTag:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
        itemRating:" 4.3",
        itemPrice:"200",
        itemDiscount:"30",
        itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
      },
  
    ];
  
     
  
    arr.map(function(ele)
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
      itemtag.setAttribute("id","itemtag")
      itemtag.innerText=ele.itemTag;
  
      div1.append(name,itemtag);
  
      var star=document.createElement("span");
      star.setAttribute("class","fa fa-star checked");
  
      var rating=document.createElement("p");
      rating.append(star);
      rating.setAttribute("id","ratingg");
      rating.append(ele.itemRating);
  
  
  
      var price=document.createElement("p");
      price.innerText=ele.itemPrice;
    
       
      var div2=document.createElement("div");
      div2.setAttribute("id","rating_and_price");
      div2.append(rating,price);
  
      var div3=document.createElement("div");
      div3.setAttribute("id","parentdiscount");
      var discount=document.createElement("p");
      discount.setAttribute("id","discount");
      discount.innerText=ele.itemDiscount;

      var i1=document.createElement("i");
      i1.setAttribute("class","fa-solid fa-percent")
      
      div3.append(discount,i1);

      var div4=document.createElement("div");
      div4.setAttribute("id","parentofcart")
      var cart=document.createElement("button");
      cart.setAttribute("id","Addtocart")
      cart.innerText="Add to Cart";
      div4.append(cart);
  
      div.append(imgdiv,div1,div2,div3,div4);
      document.querySelector("#itemsdetails").append(div);
    });
