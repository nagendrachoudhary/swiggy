var ans=JSON.parse(localStorage.getItem("city")) || "";
    if(ans.length==0)
    {
      document.getElementById("location").innerText="Maharana Pratap Square Delhi";
    }
    else{
      document.getElementById("location").innerText=ans;
    }