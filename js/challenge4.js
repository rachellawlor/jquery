
$("form").submit(function() {
    var validInput = true;
    console.log("Here");
    console.log(name);
    console.log(address);
    var name = $('#fullname');
    var address = $('#streetaddr');

    if (name.val().length == 0){
      $("#nameerrormsg").css("display", "block");
      validInput = false;
    }
    else {
      $("#nameerrormsg").css("display", "none");
    }
    if (address.val().length == 0){
      $("#addrerrormsg").css("display", "block");
      validInput = false;
    }
    else {
      $("#addrerrormsg").css("display", "none");
    }
    return validInput;

})
