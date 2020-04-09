$("#submit").click(function(){
  $("#error").text("");
  $("#tipAmount").text("");
  if($("#amount").val() == ""){
    $("#error").text("Bill amount undefined!");
  } else if ($("#service").val() == "blank"){
    $("#error").text("Service level undefined!");
  } else if ($("#party").val() == ""){
    $("#error").text("Party number undefined!");
  } else {
    var billAmount = $("#amount").val();
    var serviceLevel = $("#service").val();
    var peopleInParty = $("#party").val();
    var tipPercent = 0.10 + (serviceLevel * 0.0275) + ((peopleInParty - 2) * 0.01);
    var tipAmount = billAmount * tipPercent;
    $("#tipAmount").text("You should tip: " + tipPercent.toFixed(2) * 100 + "% or $" + tipAmount.toFixed(2) + ".");
  }
});
