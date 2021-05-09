/* 
Wanted to make nav tabs active on click but it didnt work
$(window).load(function () {
    var checkvalue = window.location.pathname;
    console.log(checkvalue);
    $("a").each(function () {
        if ($(this).attr('href') == checkvalue) { $(this).addClass("active"); }
    });

}); */

$(document).ready(function () {
    $('li.active').removeClass('active');
    console.log(location.pathname)
    $('a[href="' + location.pathname + '"]').closest('li').addClass('active');
});