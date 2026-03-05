Document.getElementById(“regForm”).addEventListener(“submit”, function(event){

Event.preventDefault();

Let name=document.getElementsByName(“fullname”)[0].value;
Let email=document.getElementsByName(“email”)[0].value;
Let phone=document.getElementsByName(“phone”)[0].value;
Let topic=document.getElementsByName(“topic”)[0].value;
Let mode=document.querySelector(‘input[name=”mode”]:checked’).value;

Let table=document.getElementById(“resultTable”);

Let row=table.insertRow(-1);

Row.insertCell(0).innerHTML=name;
Row.insertCell(1).innerHTML=email;
Row.insertCell(2).innerHTML=phone;
Row.insertCell(3).innerHTML=topic;
Row.insertCell(4).innerHTML=mode;

Document.getElementById(“successMsg”).innerHTML=”✅ Registration Successful!”;

});

