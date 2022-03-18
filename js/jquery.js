$(document).ready(function(){
    $("#orderBtn").click(function(){
      $("#makeOrder").hide();
      $("#yourOrder").show();
      
    });
});

$(document).ready(function(){
    $("#backToOrderBtn").click(function(){
      $("#makeOrder").show();
      $("#yourOrder").hide();
      
    });
});