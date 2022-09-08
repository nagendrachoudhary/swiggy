var itemdta =JSON.parse(localStorage.getItem('cart'))||[]
var addData = JSON.parse(localStorage.getItem('address')) || []
showcartdata(itemdta)
// if(addData.length>=3){
//     document.getElementById('addnewadd').disabled = true
// }else{
//     document.getElementById('addnewadd').disabled = false
// }
showAddress()
function total_value(arr){
    var total_amt =  arr.reduce(function(acc,ele){
          return parseInt(acc)+parseInt(ele.itemPrice)
      },0)
      setTimeout(() => {
          document.getElementById('total_value').innerText = total_amt
      }, 200);
  }

function showcartdata(obj) {
    obj.map(function (ele, index) {
        var div = document.createElement('div');
        var imgdiv = document.createElement('div');
        imgdiv.setAttribute('class','flex_sb')
        var p = document.createElement('p');
        p.setAttribute('class','foodname')
        p.innerHTML=`<b>${index+1}</b> ${ele.itemName}`
        // p.innerText = ele.itemName;
        var img = document.createElement('img')
        img.src=ele.itemImage
        imgdiv.append(p,img)
        var pricediv = document.createElement('div');
        pricediv.setAttribute('class','flex_sb')
        var div1 = document.createElement('div')
        div1.setAttribute('class', 'qtychange')
        var btn1 = document.createElement('button')
        btn1.addEventListener('click',function(){addqty(index)})
        btn1.innerText = '+'
        var span = document.createElement('span')
        span.innerText = 1
        var btn2 = document.createElement('button')
        btn2.addEventListener('click',function(){removeqty(index)})
        btn2.innerText = '-'
        div1.append(btn1, span, btn2)
        var p2 = document.createElement('p')
        p2.innerText = ele.itemPrice
        pricediv.append(div1,p2)
        div.append(imgdiv ,pricediv)
        setTimeout(() => {
            document.getElementById('totalcart').append(div)
        }, 100);
    })
  total_value(obj)
}

function addnewadd() {
    //     <div id="addbox1">
    //     <p>ffsfs</p>
    //     <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio explicabo provident unde est accusamus ab delectus tempore saepe velit vel!</p>
    //     <p>34 min</p>
    //     <button data-bs-toggle="modal" data-bs-target="#exampleModal" onclick="addnewadd()">Add New</button>
    // </div>

    var add = document.getElementById('add').value
    var pin = document.getElementById('pincode').value
    var country = document.getElementById('country').value
    var state = document.getElementById('state').value
    var city = document.getElementById('city').value
    var address = add + ' ' + city + ' ' + state + ' ' + country + ',' + pin
    var div = document.createElement('div')
    var iconDiv = document.createElement('div');
    iconDiv.innerHTML= '<i class="fas fa-map-marker-alt"></i>'
    var pDiv  = document.createElement('div');
    var p1 = document.createElement('h6')
    p1.innerText = 'Others'
    var p2 = document.createElement('p')
    p2.innerText = address
    var p3 = document.createElement('p')
    p3.innerText = '44 Min'
    var button = document.createElement('button')
    button.innerText = 'Deliver here'
    button.setAttribute('class', 'deliver_here')
    pDiv.append( p1, p2,  p3 ,button)
    div.append(iconDiv , pDiv)
    document.querySelector('#address').append(div)
    var obj = {
        address: address
    }
    addData.push(obj)
    setTimeout(() => {
        localStorage.setItem('address', JSON.stringify(addData))
    }, 500);
}

function showAddress() {
    addData.map(function (ele, index) {
        var div = document.createElement('div')
        var iconDiv = document.createElement('div')
        iconDiv.innerHTML= '<i class="fas fa-map-marker-alt"></i>'
        var pDiv  = document.createElement('div');
        div.setAttribute('class', 'flex_sb');
        var p1 = document.createElement('h6')
        p1.innerText = 'Others'
        var p2 = document.createElement('p')
        p2.innerText = ele.address
        var p3 = document.createElement('p')
        p3.innerText = '44 Min'
        var button = document.createElement('button')
        button.innerText = 'Deliver here'
        button.setAttribute('class', 'deliver_here')
        
        pDiv.append(p1, p2,p3, button)
        div.append(iconDiv , pDiv)

        setTimeout(() => {
            document.querySelector('#address').append(div)
        }, 200);
    })
 
}

function addqty(i){
    document.getElementById('totalcart').innerText = ''
    itemdta.map(function(ele,index){
        if(i==index){
            ele.itemPrice = parseInt(ele.itemPrice)+parseInt(ele.itemPrice)
        }
    })
    showcartdata(itemdta)
}
function removeqty(i){
    document.getElementById('totalcart').innerText = ''
itemdta.map(function(ele,index){
    if(i==index){
        ele.itemPrice = parseInt(ele.itemPrice)-parseInt(ele.itemPrice)
    }
})
showcartdata(itemdta)
}