var itemdta =JSON.parse(localStorage.getItem('cart'))||[]
var addData = JSON.parse(localStorage.getItem('address')) || []
showcartdata(itemdta)

showAddress()

function total_value(arr){
    var total_amt =  arr.reduce(function(acc,ele){
          return parseInt(acc)+parseInt(ele.itemPrice)
      },0)
      setTimeout(() => {
          document.getElementById('total_value').innerText = '₹'+total_amt
          document.getElementById('final_Amt').innerText = '₹'+(total_amt+20)
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
        span.setAttribute('id',index)
        span.innerText = ele.qty
        var btn2 = document.createElement('button')
        btn2.addEventListener('click',function(){removeqty(index)})
        btn2.innerText = '-'
        div1.append(btn1, span, btn2)
        var p2 = document.createElement('p')
        p2.innerText = '₹'+ele.itemPrice
        pricediv.append(div1,p2)
        div.append(imgdiv ,pricediv)
        setTimeout(() => {
            document.getElementById('totalcart').append(div)
        }, 100);
    })
  total_value(obj)
}

function addnewadd() {
    if(addData.length>2){
        alert("You can't add more than three")
    }else{
    var add = document.getElementById('add').value
    var pin = document.getElementById('pincode').value
    var country = document.getElementById('country').value
    var state = document.getElementById('state').value
    var city = document.getElementById('city').value
    var address = add + ' ' + city + ' ' + state + ' ' + country + ',' + pin
    var obj = {
        address: address
    }
    addData.push(obj)
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
    button.addEventListener('click',payment_mode)
    button.setAttribute('class', 'deliver_here')
    pDiv.append( p1, p2,  p3 ,button)
    var iconDiv1 = document.createElement('div');
    iconDiv1.innerHTML= `<i class="fa fa-trash text-danger" onClick="removeadd(${addData.length-1})" aria-hidden="true"></i>`
    div.append(iconDiv , pDiv,iconDiv1)
    document.querySelector('#address').append(div)
    setTimeout(() => {
        localStorage.setItem('address', JSON.stringify(addData))
    }, 500);
}
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
        button.addEventListener('click',payment_mode)
        button.innerText = 'Deliver here'
        button.setAttribute('class', 'deliver_here')
        pDiv.append(p1, p2,p3, button)
        var iconDiv1 = document.createElement('div');
    iconDiv1.innerHTML= `<i class="fa fa-trash text-danger" onClick="removeadd(${index})" aria-hidden="true"></i>`
    div.append(iconDiv , pDiv,iconDiv1)

        setTimeout(() => {
            document.querySelector('#address').append(div)
        }, 200);
    })
 
}

function removeadd(i){
    document.querySelector('#address').innerHTML=''
addData.splice(i,1)
localStorage.setItem('address',JSON.stringify(addData))
showAddress()
window.location.reload()
}

function addqty(i){
    document.getElementById('totalcart').innerText = ''
    var a = JSON.parse(localStorage.getItem('cart'))
    itemdta.map(function(ele,index){
        if(i==index){
            ele.qty = parseInt(ele.qty)+1;
            ele.itemPrice = parseInt(ele.itemPrice)+parseInt(a[i].itemPrice)
        }
    })
    showcartdata(itemdta)
}
function removeqty(i){
document.getElementById('totalcart').innerText = ''
var a = JSON.parse(localStorage.getItem('cart'))
itemdta.map(function(ele,index){
    if(i==index){
        ele.itemPrice = parseInt(ele.itemPrice)-parseInt(a[i].itemPrice)
        ele.qty = parseInt(ele.qty)-1;
        if(ele.itemPrice==0){
            itemdta.splice(i,1)
            localStorage.setItem('cart',JSON.stringify(itemdta))
        }
    }
})
showcartdata(itemdta)
}


function payment_mode(){
    document.querySelector('#payMode').innerText = ''
    var input = document.createElement('input')
    input.type = 'checkbox'
    input.addEventListener('click',function(){open_card(event)})
    var span = document.createElement('span');
    span.innerText = 'Pay via Card';
    setTimeout(() => {
        document.querySelector('#payMode').append(input,span)
    }, 200);
}
function open_card(e){
if(e.srcElement.checked){
    showInfo()
    window.location.href = './card.html'
}else{
    
};
}

function showInfo() {
    var x = document.getElementById("table");
    if (x.style.display === "none") {
      return x.style.display = "block";
    }
    return x.style.display = "none";
  }

