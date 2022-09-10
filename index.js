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
document.querySelector("#signupsave").addEventListener("click",function(){
	event.preventDefault()
	var username=document.querySelector("#name_input_box").value
	var useremail=document.querySelector("#email_input_box").value
	var userphone=document.querySelector("#phoneno").value
	var userpassword=document.querySelector("#password_input_box").value
	var user={
		"username":username,
		"useremail":useremail,
		"userphone":userphone,
		"userpassword":userpassword
	}
	console.log(user)
	userdata.push(user)
	localStorage.setItem("userdata",JSON.stringify(userdata))
	if(user.username.length==0||user.useremail.length==0||user.userpassword.length==0||user.userphone.length==0){
		alert("Enter all details thank you")
	}	
    else{
		put_enter_otp_to_side_and_run_login()
	}
	
})


// login part
document.querySelector("#loginsave").addEventListener("click",login2)
function login2(){
	event.preventDefault()
	var useremail=document.querySelector("#useremail").value
	var userpassword=document.querySelector("#userpassword").value
	ans=userdata.filter(function(el,i){
		if(el.useremail==useremail){
			if(el.userpassword==userpassword){
				return el
				
			}
		}
		
	})
	if(ans.length!=0){
	localStorage.setItem("user",JSON.stringify(ans))
	location.href="./home/home.html"}
	if(ans.length==0){
		alert("worng password")
	}
	


		
	
}



function put_enter_otp_to_side_and_run_login(){
	login();
	//document.getElementById("otp_sliding_box").style.right = "-506px";
}

function put_enter_otp_for_sign_up_to_side_and_run_sign_up(){
	signup();
	document.getElementById("complete_signup_otp_sliding_box").style.right = "0px";
}

function put_sign_up_otp_box_to_right(){
	document.getElementById("complete_signup_otp_sliding_box").style.right = "0px";
}

function bring_enter_otp_sliding_box(){
	document.getElementById("otp_sliding_box").style.right = "0px";
}

function display_ref_code_box(){
	document.getElementById("referral_code_button").style.display = "none";
	document.getElementById("referral_box").style.display = "block";
}

function put_login_in(){
	document.getElementById("sliding_box").style.transition = "0.5s";
	document.getElementById("sliding_box").style.right = "-506px";

	document.getElementById("black_film_box").style.display = "none";
}   

function login(){

	document.getElementById("complete_signup_otp_sliding_box").style.right = "-506px";

	document.getElementById("black_film_box").style.display = "block";

	var signupele = document.getElementById("second_sliding_box");
	var styles = window.getComputedStyle(signupele) || signupele.currentStyle; 
	var right_value = styles.right;
	if(right_value != "-506px"){
		document.getElementById("sliding_box").style.transition = "0s";
		document.getElementById("sliding_box").style.right = "0px";
		document.getElementById("second_sliding_box").style.right = "-506px";
	} else{
		document.getElementById("sliding_box").style.right = "0px";
	}
}

function signup(){

	document.getElementById("black_film_box").style.display = "block";

	var loginele = document.getElementById("sliding_box");
	var styles = window.getComputedStyle(loginele) || loginele.currentStyle; 
	var right_value = styles.right;
	if(right_value != "-506px"){
		document.getElementById("second_sliding_box").style.transition = "0s";
		document.getElementById("second_sliding_box").style.right = "0px";
		document.getElementById("sliding_box").style.right = "-506px";
	} else{
		document.getElementById("second_sliding_box").style.right = "0px";
	}
}

function put_signup_in(){
	document.getElementById("second_sliding_box").style.transition = "0.5s";
	document.getElementById("second_sliding_box").style.right = "-506px";

	document.getElementById("black_film_box").style.display = "none";
}

