


function giveAkanName() {
 var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
 var maleAkanNames = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"];
 var femaleAkanNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

 var dd = document.getElementById("inputDate") .Value;
 var mm = document.getElementById("inputMonth").Value;
 var yy = document.getElementById("inputYear").Value;
 var male = document.getElementById("inputMale");
 var female = document.getElementById("inputFemale"); 
 var date = new Date(yy + "-" + mm + "-" + dd);
 console.log(date)
 console.log
 var days = date.getDate();

 console.log(days)

 if (dd <=0 || dd>31){
    alert("invalid day");
 }
 else if (mm < 1 || mm > 12){
    alert("invalid month");
 }
  if (male.checked==true){
    alert("Your Akan names is" + " " +maleAkanNames[days] + " " + "you were born on" + " " +daysOfWeek[days]);
 }
 else if ( female.checked==true){
    alert("Your Akan names is" + " " +femaleAkanNames[days] + " " + "you were born on" +" " + daysOfWeek[days]);
 }
}



   