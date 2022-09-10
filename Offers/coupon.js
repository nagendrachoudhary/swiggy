var ans=JSON.parse(localStorage.getItem("city")) || "";
    if(ans.length==0)
    {
      document.getElementById("location1").innerText="Maharana Pratap Square Delhi";
    }
    else{
      document.getElementById("location1").innerText=ans;
    }
    function signin()
    {
      event.preventDefault();
      if(a==null)
      {
        
        location.href="../index.html";
         
      }
    }
    var a=JSON.parse(localStorage.getItem("user"));
    
    if(a!==null)
    {
     document.querySelector("#user").innerText=a[0].username;
    }
    else{
      document.querySelector("#user").innerText="Sign In";
    }