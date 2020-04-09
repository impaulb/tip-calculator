var amount = $("#amount");
var service = $("#service");
var party = $("#party");

var userInput = $(".user");

userInput.on("input", function(){
if(amount.val() != "" && service.val() != "blank" && party.val() != ""){
  var billAmount = $("#amount").val();
  var serviceLevel = $("#service").val();
  var peopleInParty = $("#party").val();
  var tipPercent = 0.10 + (serviceLevel * 0.025) + ((peopleInParty - 2) * 0.002);
  var tipAmount = billAmount * tipPercent;
  $("#tipAmount").text("You should tip: " + tipPercent.toFixed(2) * 100 + "% or $" + tipAmount.toFixed(2) + ".");
}
});
