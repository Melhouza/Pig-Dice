var randomize = function(){
  var rolledNumber = Math.floor((Math.random() * 6) + 1);
  return rolledNumber;
}

//$(document).ready(function() {
//$("button#roll").click(function(){

//  var rolledNumber= randomize();

  $("#rollednumber").text(rolledNumber);

//
  if(rolledNumber==1  ) {

//alert("Ooops!!You rolled 1.It's the other player's turn");
  }
});
  $("button#hold").click(function(){
    alert("Its the other players turn");
  });
//$("button#roll2").click(function(){
    var rolledNumberb= randomize();

$("#rolledNumberb").text(rolledNumberb);

  });
if(rolledNumberb==1) {

//  alert("Ooops!!You rolled 1.It's the other player's turn");
}
$("button#hold2").click(function(){
alert("Its the other players turn");
  });
});
