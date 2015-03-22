$(document).ready(function () {
    var resizeSections = function () {
        var height = $(window).height() - 50;
        $(".section").height(height);
    }

    resizeSections();

    $(window).resize(function () {
        resizeSections();
    });
});

