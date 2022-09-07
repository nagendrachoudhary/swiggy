var obj = [{
        foodname: 'icecream',
        qty: 1,
        price: 200
    },
    {
        foodname: 'thali',
        qty: 1,
        price: 300
    },
    {
        foodname: 'Panipuri',
        qty: 1,
        price: 50
    }
]

showcartdata(obj)
var addData = JSON.parse(localStorage.getItem('address')) || []
// if(addData.length>=3){
//     document.getElementById('addnewadd').disabled = true
// }else{
//     document.getElementById('addnewadd').disabled = false
// }
showAddress()

function showcartdata(obj) {
    obj.map(function (ele, index) {
        var div = document.createElement('div');
        div.setAttribute('class', 'flex1');
        var p = document.createElement('p');
        p.innerText = ele.foodname;
        var div1 = document.createElement('div')
        div1.setAttribute('class', 'qtychange')
        var btn1 = document.createElement('button')
        btn1.innerText = '+'
        var span = document.createElement('span')
        span.innerText = ele.qty
        var btn2 = document.createElement('button')
        btn2.innerText = '-'
        div1.append(btn1, span, btn2)
        var p2 = document.createElement('p')
        p2.innerText = ele.price
        div.append(p, div1, p2)
        setTimeout(() => {
            document.getElementById('right').append(div)
        }, 100);
    })
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
    var div = document.createElement('div')
    var address = add + ' ' + city + ' ' + state + ' ' + country + ',' + pin
    var p1 = document.createElement('p')
    p1.innerText = 'Others'
    var p2 = document.createElement('p')
    p2.innerText = address
    var p3 = document.createElement('p')
    p3.innerText = '44 Min'
    var button = document.createElement('button')
    button.innerText = 'Deliver here'
    button.setAttribute('class', 'deliver_here')
    div.append(p1, p2, button, p3)
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
        var p1 = document.createElement('p')
        p1.innerText = 'Others'
        var p2 = document.createElement('p')
        p2.innerText = ele.address
        var p3 = document.createElement('p')
        p3.innerText = '44 Min'
        var button = document.createElement('button')
        button.innerText = 'Deliver here'
        button.setAttribute('class', 'deliver_here')
        div.append(p1, p2, button, p3)
        setTimeout(() => {
            document.querySelector('#address').append(div)
        }, 200);
    })
}