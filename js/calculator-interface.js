$(document).ready(function() {

  $("#calculator").click(function(event){
    $("#calc").show();
    $(".begin-div").hide();
  });

  $(".backbtn").click(function(event){
    $("#calc").hide();
    $(".begin-div").show();
    $("#output").hide();
  });

  $('#add').click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = add(number1, number2);
    $("#output").text(result);
  });

  $('#subtract').click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = subtract(number1, number2);
    $("#output").text(result);
  });

  $('#multiply').click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = multiply(number1, number2);
    $("#output").text(result);
  });

  $('#divide').click(function(event) {
    event.preventDefault();
    var number1 = parseInt($("#num1").val());
    var number2 = parseInt($("#num2").val());
    var result = divide(number1, number2);
    $("#output").text(result);
  });
});
