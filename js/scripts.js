function giveAckaName(){
    var Date = document.getElementById("inputDate").value;
    var dd = parseInt(Date);
    var Month = document.getElementById("inputMonth").value;
    var mm = parseInt(Month);
    var Year = document.getElementById("inputYear").value;
    var yy = parseInt(Year);
    var cc = (yy - 1) / 100 + 1;
    var result = parseInt(((cc / 4) - 2 * cc - 1) + ((5 * yy / 4)) + ((26 * (mm + 1) / 10)) + dd) % 7;

    var boyName = ["kwasi", "kwadwo", "kwabena", "kwaku", "yaw", "kofi", "kwame"]
    var girlName = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  
     if (document.getElementById("inputGender").checked){
      var gender = 'female';
      }
     else {
      var gender = 'male';
      }
      if (mm < 1 || mm > 12 || mm == 2 && dd > 29) {
      alert("INVALID MONTH");
      }
      else if (dd < 1 || dd > 31) {
      alert("INVALID DAY");
      }
      else if (Math.ceil(result) == 1 && gender === 'male');{
      alert =("Born on Monday ,your akan name is " + boyName[1]);
      }
     if (Math.ceil(result) == 2 && gender === 'male') {
      alert =("Born on Tuesday ,your akan name is " + boyName[2]);
      }
      else if (Math.ceil(result) == 3 && gender === 'male') {
      alert=("Born on Wednesday ,your akan name is " + boyName[3]);
      }
      else if (Math.ceil(result) == 4 && gender === 'male') {
      alert=("Born on Thursday,your akan name is " + boyName[4]);
      }
      else if (Math.ceil(result) == 5 && gender === 'male') {
      alert=("Born on Friday,your akan name is " + boyName[5]);
      }
      else if (Math.ceil(result) == 6 && gender === 'male') {
      alert=("Born on Saturday,your akan name is " + boyName[6]);
      }
      else if (Math.ceil(result) == 0 && gender === 'male') {
      alert=("Born on Sunday,your akan name is " + boyName[0]);
      }
      else if (Math.ceil(result) == 1 && gender === 'female') {
      alert=("Born on monday ,your akan name is " + girlName[1]);
      }
      else if (Math.ceil(result) == 2 && gender === 'female') {
      alert=("Born on Tuesday,your akan name is " + girlName[2]);
      }
      else if (Math.ceil(result) == 3 && gender === 'female') {
      alert=
      ("Born on Wednesday,your akan name is " + girlName[3]);
      }
      else if (Math.ceil(result) == 4 && gender === 'female') {
      alert=("Born on Thursday,your akan name is " + girlName[4]);
      }
      else if (Math.ceil(result) == 5 && gender === 'female') {
      alert=("Born on Friday,your akan name is " + girlName[5]);
      }
      else if (Math.ceil(result) == 6 && gender === 'female') {
      alert=("Born on Saturday,your akan name is " + girlName[6]);
      }
      else if (Math.ceil(result) == 0 && gender === 'female') {
      alert=("Born on Sunday,your akan name is " + girlName[0]);
      }
     else {
      alert("invalid input!");
      }
}
   