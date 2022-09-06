var obj = 
[
    {
        foodname: 'icecream',
        qty:1,
        price:200
    },
    {
        foodname: 'thali',
        qty:1,
        price:300
    },
    {
        foodname: 'Panipuri',
        qty:1,
        price:50
    }
]
showcartdata(obj)
function showcartdata(obj){
obj.map(function(ele,index){
    var div = document.createElement('div');
    div.setAttribute('class','flex1');
    var p = document.createElement('p');
    p.innerText = ele.foodname;
    var div1 = document.createElement('div')
    div1.setAttribute('class','qtychange')
    var btn1 = document.createElement('button')
    btn1.innerText = '+'
    var span = document.createElement('span')
    span.innerText = ele.qty
    var btn2 = document.createElement('button')
    btn2.innerText = '-'
    div1.append(btn1,span,btn2)
    var p2 = document.createElement('p')
    p2.innerText = ele.price
    div.append(p,div1,p2)
    setTimeout(() => {
        document.getElementById('right').append(div)
    }, 100);
})
}