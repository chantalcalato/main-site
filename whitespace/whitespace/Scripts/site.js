$(document).ready(function () {
    var resizeSections = function () {
        var windowHeight = $(window).height() - 50;

        $('.section').each(function (i, obj) {
            var sectionHeight = windowHeight;
            if ($(obj).height() > sectionHeight) {
                sectionHeight = $(obj).height();
            }

            $(obj).height(sectionHeight);            
            //obj.css('min-height', sectionHeight);
        });

        //var sectionHeight = Math.max(windowHeight, $(".section").height());
        //$(".section").height(sectionHeight);
        //$('.section').css('min-height', windowHeight);
    }

    resizeSections();

    $(window).resize(function () {
        resizeSections();
    });
});

