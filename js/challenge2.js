$("#useBilling").click(function() {
    let home = $("#home");
    if ($(this).is(':checked')){
        home.val($('#billing').val());
        home.prop('disabled', true);
    }
    else {
        home.val('');
        home.prop('disabled', false);
    }
  });


// useBilling.onchange = function() {
// 	let home = document.querySelector("#home");
// 	if (this.checked){
// 		home.value = document.querySelector("#billing").value;
// 		home.disabled = true;}
// 	else {
// 		home.value = "";
// 		home.disabled = false;}
//
// 	}
