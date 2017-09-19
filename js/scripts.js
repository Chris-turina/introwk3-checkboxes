var questionThree = 0;
var stress = 0;

$(document).ready(function(){
  $("form#stressQs").submit(function(event){
    event.preventDefault();
    $("#output").show();
    $("input:checkbox[name=symptom]:checked").each(function(){
      var symptom = parseInt($(this).val());
      stress = stress + symptom;
    });
    $("input:checkbox[name=health]:checked").each(function(){
      var health = parseInt($(this).val());
      stress = stress + health;
    });
    $("input:checkbox[name=manage]:checked").each(function(){
      var manage = parseInt($(this).val());
      questionThree = questionThree + manage;
    });
    if (stress > questionThree ){
      $("#output").append("You are really stressed");
    } else if (stress === questionThree) {
      $("#output").append("You are somewhat stressed");
    } else {
      $("#output").append("You are not stressed");
    }
    $("#stressQs").hide();
  });
});
