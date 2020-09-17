$(document).ready(function(){
        $('[data-spy="scroll"]').each(function () {
            var $spy = $(this).scrollspy('refresh');
        });
});


$(document).ready(function () {
    $("#navbarResponsive").on("activate.bs.scrollspy", function () {
        var currentItem = $(".nav li.active > a").text();
        $("#info").empty().html("Currently you are viewing - " + currentItem);
    })
});
