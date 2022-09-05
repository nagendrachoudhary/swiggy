var arr=[

    {
      itemName: "6 Veg Cheese Pizza",
      itemDetails:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
      itemRating:" 4.3",
      itemPrice:"$ 50 for three",
      itemDiscount:"30% off | USE TRY30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
    },
    {
      itemName: "6 Veg Cheese Pizza",
      itemDetails:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
      itemRating:" 4.3",
      itemPrice:"$ 50 for three",
      itemDiscount:"30% off | USE TRY30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
    },
    {
      itemName: "6 Veg Cheese Pizza",
      itemDetails:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
      itemRating:" 4.3",
      itemPrice:"$ 50 for three",
      itemDiscount:"30% off | USE TRY30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
    },
    {
      itemName: "6 Veg Cheese Pizza",
      itemDetails:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
      itemRating:" 4.3",
      itemPrice:"$ 50 for three",
      itemDiscount:"30% off | USE TRY30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
    },
    {
      itemName: "6 Veg Cheese Pizza",
      itemDetails:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
      itemRating:" 4.3",
      itemPrice:"$ 50 for three",
      itemDiscount:"30% off | USE TRY30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
    },
    {
      itemName: "6 Veg Cheese Pizza",
      itemDetails:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
      itemRating:" 4.3",
      itemPrice:"$ 50 for three",
      itemDiscount:"30% off | USE TRY30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
    },
    {
      itemName: "6 Veg Cheese Pizza",
      itemDetails:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
      itemRating:" 4.3",
      itemPrice:"$ 50 for three",
      itemDiscount:"30% off | USE TRY30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
    },
    {
      itemName: "6 Veg Cheese Pizza",
      itemDetails:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
      itemRating:" 4.3",
      itemPrice:"$ 50 for three",
      itemDiscount:"30% off | USE TRY30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
    },
    {
      itemName: "6 Veg Cheese Pizza",
      itemDetails:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
      itemRating:" 4.3",
      itemPrice:"$ 50 for three",
      itemDiscount:"30% off | USE TRY30",
      itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
    }, {
        itemName: "6 Veg Cheese Pizza",
        itemDetails:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
        itemRating:" 4.3",
        itemPrice:"$ 50 for three",
        itemDiscount:"30% off | USE TRY30",
        itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
      },
      {
        itemName: "6 Veg Cheese Pizza",
        itemDetails:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
        itemRating:" 4.3",
        itemPrice:"$ 50 for three",
        itemDiscount:"30% off | USE TRY30",
        itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
      },
      {
        itemName: "6 Veg Cheese Pizza",
        itemDetails:"Freshly baked 6 inch pizza with a topping of onion, capsicum, tomato and cheese.",
        itemRating:" 4.3",
        itemPrice:"$ 50 for three",
        itemDiscount:"30% off | USE TRY30",
        itemImage:"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/wihgxiozd9dqpghhu4ri",
      },
  
    ];
  
     
  
    arr.map(function(ele)
    {
      var div=document.createElement("div");
  
      var div1=document.createElement("div");
      var img=document.createElement("img");
      img.setAttribute("src",ele.itemImage);
      img.setAttribute("alt","1");
  
      
      var name=document.createElement("h4");
      name.setAttribute("id","productname");
      name.innerText=ele.itemName;
  
      var itemdetail=document.createElement("p");
      itemdetail.setAttribute("id","itemcontent")
      itemdetail.innerText=ele.itemDetails;
  
      div1.append(img,name,itemdetail);
  
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
      var discount=document.createElement("p");
      discount.setAttribute("id","discount");
      discount.innerText=ele.itemDiscount;
      div3.append(discount);
  
      var div4=document.createElement("div");
      div4.setAttribute("id","parentofcart")
      var cart=document.createElement("button");
      cart.setAttribute("id","Addtocart")
      cart.innerText="Add to Cart";
      div4.append(cart);
  
      div.append(div1,div2,div3,div4);
      document.querySelector("#itemsdetails").append(div);
    });
