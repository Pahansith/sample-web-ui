/**
 * Created by Notebook 15 on 6/20/2018.
 */
$("#navi .fa-chevron-down").toggleClass("rtoate180");

$(document).ready(function(){
    $("#navi").click(function(){
        $("#navi .fa-chevron-down").toggleClass("rtoate180");
        $("#navigation").stop().slideToggle(500);
    });
});

$("#navi-company .fa-chevron-down").toggleClass("rtoate180");

$(document).ready(function(){
    $("#navi-company").click(function(){
        $("#navi-company .fa-chevron-down").toggleClass("rtoate180");
        $("#navigation-company").stop().slideToggle(500);
    });
});

$("#navi-lang .fa-chevron-down").toggleClass("rtoate180");

$(document).ready(function(){
    $("#navi-lang").click(function(){
        $("#navi-lang .fa-chevron-down").toggleClass("rtoate180");
        $("#navigation-lang").stop().slideToggle(500);
    });
});