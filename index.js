       
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