/*note, this requires jQuery to work. It could be written without jQuery */
$(document).ready(function(){
  $("nav select").change(function() {
   /* window.location = $(this).find("option:selected").val();*/
    var loc = $(this).find("option:selected").val();
    document.location.href = loc;
    console.log('changed',loc);
  });
});