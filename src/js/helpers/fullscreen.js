ED.prototype.fullScreen = function () {

    var fn = this;

    fn.is_supported = false;
    fn.is_fullscreen = false;
    fn.startFullScreen = function () {};
    fn.exitFullScreen = function () {};

    if (
            document.fullscreenEnabled ||
            document.webkitFullscreenEnabled ||
            document.mozFullScreenEnabled ||
            document.msFullscreenEnabled
            ) {
        fn.is_supported = true;
    }

    var d = document.documentElement;

    // handle start fullscreen function
    if (d.requestFullscreen) {
        fn.startFullScreen = function () {
            d.requestFullscreen()
        };

    } else if (d.webkitRequestFullscreen) {
        fn.startFullScreen = function () {
            d.webkitRequestFullscreen()
        };

    } else if (d.mozRequestFullScreen) {
        fn.startFullScreen = function () {
            d.mozRequestFullScreen()
        };

    } else if (d.msRequestFullscreen) {
        fn.startFullScreen = function () {
            d.msRequestFullScreen()
        };
    }

    // handle exit fullscreen function
    if (document.exitFullscreen) {
        fn.exitFullScreen = function () {
            document.exitFullscreen()
        };
    } else if (document.webkitExitFullscreen) {
        fn.exitFullScreen = function () {
            document.webkitExitFullscreen()
        };
    } else if (document.mozCancelFullScreen) {
        fn.exitFullScreen = function () {
            document.mozCancelFullScreen()
        };
    } else if (document.msExitFullscreen) {
        fn.exitFullScreen = function () {
            document.msExitFullscreen()
        };
    }

    fn.onClick = function (selector)
    {
        if (fn.is_supported)
        {
            $(selector).click(function () {
                fn.toggleFullScreen();
            });
        } else
        {
            $(selector).hide();
        }

    }

    fn.toggleFullScreen = function () {

        if (fn.is_fullscreen)
        {
            fn.exitFullScreen();
            fn.is_fullscreen = false;
        } else
        {
            fn.startFullScreen();
            fn.is_fullscreen = true;
        }
    };

    fn.init = function() {

    };

    return fn;
}