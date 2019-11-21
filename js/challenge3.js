

$('form').submit(function() {
    var fruit = $('input[name="fruit"]');
    var age = $('input[name="standing"]');
    if(fruit.is(':checked') && age.is(':checked')) {
        return true;
    }
    alert("You must pick both a fruit and a standing!");
    return false;
})

// ch3form.onsubmit = function() {
//     var fruit = $('input[name="fruit"]')
//
// ch3form.onsubmit = function() {
//     var fruit = document.querySelectorAll('input[name="fruit"]')
//     for (let i = 0; i < fruit.length;i++){
//         if (fruit[i].checked)
//             return true;
//     }
//     alert("You must pick a fruit!")
//     return false;
