
$("#subscribe").change(function() {
	var x = $("#emailField");
	if ($(this).is(':checked')){
		console.log("selected");
    	x.css('display', "block");
  	} else {
		  console.log("Not selected");
    	x.css('display', 'none');
      }
})
