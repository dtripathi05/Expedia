$( function() {
    $( ".datepicker" ).datepicker();
  } );

  
  $( function() {
    $( "#tabflights" ).tabs();
  } );

$( function() {
    $( "#tabhotels" ).tabs();
  } );

   $( function() {
    $( "#form" ).tabs();
  } );

   $( function() {
    var availableTags = [
      "London",
      "Paris",
      "Rome",
      "Dubai",
      "NewDelhi",
      "China",
      "NewYork",
      "Pune",
      "Bandlore",
      "Rajasthan",
      "Lucknow"
       ];
    $( "#tags").autocomplete({
      source: availableTags
    });
     $( "#from").autocomplete({
      source: availableTags
    });
     $( "#from1").autocomplete({
      source: availableTags
    });
      $( "#to1").autocomplete({
      source: availableTags
    });
       $( "#to").autocomplete({
      source: availableTags
    });
    });

$('#flightButton').click(function(){
	$('#tabflights').show();
	$('#tabhotels').hide();
});
$('#hotelButton').click(function(){
	$('#tabflights').hide();
	$('#tabhotels').show();
});
$('#flightTab').click(function(){
  $('#tabflights').show();
  $('#tabhotels').hide();
});
$('#hotelTab').click(function(){
  $('#tabflights').hide();
  $('#tabhotels').show();
});

$("#rooms").change(function(){
  var value=$("#rooms").find(":selected").text();
$('#addElement').html("");
for(var i=1; i<value;i++){
   $('#addElement').append("<div><label>Room-"+(i+1)+"</label></div><label>Children(0-17)</label><select name='number'></select><label>Adult(18+)</label><select name='number'></select>");
}
});
$("#child1").change(function(){
    var value=$("#child1").find(":selected").text();
    $('#addChild1').html("");
    for(var i=1; i<=value;i++)
    {
      $('#addChild1').append("<label for='number'>Child-"+i+" Age</label><select name='number'></select>");
    }
});
$("#child2").change(function(){
    var value=$("#child2").find(":selected").text();
    $('#addChild2').html("");
    for(var i=1; i<=value;i++)
    {
      $('#addChild2').append("<label for='number'>Child-"+i+" Age</label><select name='number'></select>"); 
    }
});

$('#accountMenu').click(function(){
  $("#account").show();
 $("#trip").hide();
 $("#support").hide();
});
$('#supportMenu').click(function(){
  $("#support").show();
 $("#trip").hide();
 $("#account").hide();
});
$('#tripMenu').click(function(){
  $("#trip").show();
 $("#support").hide();
 $("#account").hide();
});