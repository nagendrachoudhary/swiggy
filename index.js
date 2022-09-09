 document.getElementById("citys").addEventListener("click",addcitys)
        function addcitys(){
            var city=document.querySelector("input").value
            localStorage.setItem("city",JSON.stringify(city))
        }
        
        var rajasthan=[
			'Ajmer',
			'Alwar',
			'Bikaner',
			'Barmer',
			'Banswara',
			'Bharatpur',
			'Baran',
			'Bundi',
			'Bhilwara',
			'Churu',
			'Chittorgarh',
			'Dausa',
			'Dholpur',
			'Dungapur',
			'Ganganagar',
			'Hanumangarh',
			'Jhunjhunu',
			'Jalore',
			'Jodhpur',
			'Jaipur',
			'Jaisalmer',
			'Jhalawar',
			'Karauli',
			'Kota',
			'Nagaur',
			'Pali',
			'Pratapgarh',
			'Rajsamand',
			'Sikar',
			'Sawai Madhopur',
			'Sirohi',
			'Tonk',
			'Udaipur',
            'Ahmednagar',
			'Akola',
			'Amravati',
			'Aurangabad',
			'Bhandara',
			'Beed',
			'Buldhana',
			'Chandrapur',
			'Dhule',
			'Gadchiroli',
			'Gondia',
			'Hingoli',
			'Jalgaon',
			'Jalna',
			'Kolhapur',
			'Latur',
			'Mumbai City',
			'Mumbai suburban',
			'Nandurbar',
			'Nanded',
			'Nagpur',
			'Nashik',
			'Osmanabad',
			'Parbhani',
			'Pune',
			'Raigad',
			'Ratnagiri',
			'Sindhudurg',
			'Sangli',
			'Solapur',
			'Satara',
			'Thane',
			'Wardha',
			'Washim',
			'Yavatmal',
            'Ambala',
			'Bhiwani',
			'Faridabad',
			'Fatehabad',
			'Gurgaon',
			'Hissar',
			'Jhajjar',
			'Jind',
			'Karnal',
			'Kaithal',
			'Kurukshetra',
			'Mahendragarh',
			'Mewat',
			'Palwal',
			'Panchkula',
			'Panipat',
			'Rewari',
			'Rohtak',
			'Sirsa',
			'Sonipat',
			'Yamuna Nagar',
	]
         rajasthan.sort();
    for(var i=0;i<80;i++){
          var p=document.createElement("p");
          p.innerText=rajasthan[i];
          document.getElementById("city").append(p);
        }
		var j=0;
    
		function changeText(){
			   var x=document.getElementById("word").innerText;
			   var word=["Late night at office ?","Unexpected guests ?","hungry ?","Game Night ?","Cooking gone wrong ?","Movie marathon ?"]
			   document.getElementById("word").innerText=word[j];
			   j=(j+1)%word.length;
		   }
		   setInterval(changeText,1500);



var userdata=JSON.parse(localStorage.getItem("userdata"))||[]
// signup function 
document.querySelector("#continue").addEventListener("click",function(){
	event.preventDefault()
	var username=document.querySelector("#name").value
	var useremail=document.querySelector("#email").value
	var userphone=document.querySelector("#phone").value
	var userpassword=document.querySelector("#password").value
	var user={
		"username":username,
		"useremail":useremail,
		"userphone":userphone,
		"userpassword":userpassword
	}
	console.log(user)
	userdata.push(user)
	localStorage.setItem("userdata",JSON.stringify(userdata) )
	if(user.username.length>0&&user.useremail.length>0&&user.userpassword.length>0&&user.userphone.length>0){
		location.href="./home/home.html"
		localStorage.setItem("user",JSON.stringify(user));
	}
	if(user.username.length==0||user.useremail.length==0||user.userpassword.length==0||user.userphone.length==0){
		alert("Enter all details thank you")
	}	
})


// login part
document.querySelector("#continue2").addEventListener("click",function(){
	event.preventDefault()
	var useremail=document.querySelector("#email2").value
	var userpassword=document.querySelector("#password2").value
	var ans=userdata.filter(function(el,ind){
		if(el.useremail===useremail){
		   if(el.userpassword===userpassword){
			return el
		   }
		}
	})
	if(ans.length==0){
	alert("enter email and password")
    }
	if(ans.length>0){
        localStorage.setItem("user",JSON.stringify(ans));
		location.href="./home/home.html"
	}
	


		
	
})   
