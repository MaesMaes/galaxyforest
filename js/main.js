jQuery(document).ready(function() {
    $('.project_list-project').on('mouseover', function() {
        $('.project_list-project').css('opacity', '.15');
        $(this).css('opacity', '1');

    }).on('mouseout', function() {
        $('.project_list-project').css('opacity', '1');
    });

    $('.main-header-volume_control-onoff').on('click', function() {
        if ($(this).attr('tern') != 'tern') {
            $(this).attr('tern', 'tern');
            $(this).text('звук выкл');
            document.getElementById("sound").pause();
            $('.bar').addClass('nosound');
        } else {
            $(this).removeAttr('tern');
            $(this).text('звук вкл');
            $('.bar').removeClass('nosound');
            document.getElementById("sound").play();
        }
    });

    $('.main-header-menu').on('click', function() {
        if ($(this).attr('state') != 'open') {
            $(this).attr('state', 'open');
            $('.main-header-mobile_nav').addClass('display_menu');
            $('.main-header-menu-bar').addClass('animate_hamburger');
        } else {
            $(this).removeAttr('state');
            $('.main-header-mobile_nav').removeClass('display_menu');
            $('.animate_hamburger').removeClass('animate_hamburger');
        }
    });

});
(function($) {
    jQuery.fn.deScramble = function(t, n, i, r, o) {
        var a = "АБВГДЕЖЗИЙКЛМНОПРСТУФЧЦЧШЩЪЫЬЭЮЯабвгдеёжзийклмнопрстуфхцчшщъыьэюяABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
            //var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
            s = $(this),
            u = setInterval(function() {
                t -= n;
                var e;
                if (t - n > 0) {
                    e = i.split("");
                    for (var l = 0; l < e.length; l++) e[l].match(/[а-яa-z]/gi) && (e[l] = a.charAt(Math.floor(Math.random() * a.length)));
                    s.text(e.join(""))
                } else if (0 >= t - n && t > 0) {
                    e = i.split("");
                    for (var c = r.split(""), d = 0; d < e.length; d++) d % 2 === 0 && (e[d] = c[d]);
                    s.text(e.join(""))
                } else 0 >= t && (clearInterval(u), s.text(r), "function" == typeof o && o())
            }, n)
    };
    $("a").hover(function() {
        $(this).deScramble(500, 100, $(this).data("link"), $(this).data("decrypt"), function() {})
    }, function() {
        $(this).deScramble(500, 100, $(this).data("decrypt"), $(this).data("link"), function() {})
    }), $("a.project").hover(function() {
        $("a.project").not(this).toggleClass("opacity"), $(this).toggleClass("no-border")
    }), $(".team li").hover(function() {
        $(".member").not(this).toggleClass("opacity")
    });
})(jQuery);

$(window).on('load', function () {
    setTimeout(function () {
        $('.img-percentage').fadeOut();
        var $preloader = $('#preloader');
        $(".white-area").addClass("show")
        $preloader.delay(800).fadeOut('slow');
    }, 700)
});

// Навигация
(function($) {
    var GF = {
        navigation: {
            portfolio: function (that) {
                if (that.hasClass('no')) return;
                var link = that.data('navigation');
                $('.main-home_wrapper').addClass('fade-content');
                $('.project_list').delay(1000).fadeOut();
                $('.main').addClass('main-expand');
                $('.project-link-nav').removeClass('move-up');
                $('.main-header-about').addClass('move-up');
                $('.' + link + '-page').delay(1000).fadeIn();
                $('footer').fadeOut();
                $('.main-header-mobile_nav').removeClass('display_menu');
                $('.animate_hamburger').removeClass('animate_hamburger');
            },
            home: function () {
                $('.main').removeClass('main-expand');
                $('.main-home_wrapper').removeClass('fade-content');
                $('.project_list').fadeIn();
                $('.project-link-nav').addClass('move-up');
                $('.main-header-about').removeClass('move-up');
                $('.page').hide();
                $('footer').fadeIn();
            }
        }
    }
    $('.navigation').on('click', function () {
        GF.navigation.portfolio($(this));
    });
    $('.go-back').on('click', function () {
        GF.navigation.home();
    });
})(jQuery);

























//
