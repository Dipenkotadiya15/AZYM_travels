// Navbar

// function toggler() {
//     var x = document.getElementById('nav1');
//     if (x.style.display == 'none') {
//         x.style.display = 'block'
//     } else {
//         x.style.display = 'none';
//     }
// }

$(document).ready(function() {
    $('.toggle').click(function() {
        $('#nav1').slideToggle('slow');
    });
});


// Tab using Jquery 
$(function() {  
    $( "#tabs-1" ).tabs();  
 });  


    
