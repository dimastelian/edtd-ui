ED.prototype.joystick = function () {

    var fn = this;
    var $;
    var joystick;

    fn.init = function (jq) {

        $ = jq

        document.addEventListener('touchmove', function (e) {
            fn.attach('#navJoystick');
        });
        document.addEventListener('touchend', function (e) {
            fn.destroy();
            alert('x');
        });
    };

    fn.destroy = function ()
    {
        joystick.destroy();
    };

    fn.attach = function (elementID) {
        console.log("touchscreen is", VirtualJoystick.touchScreenAvailable() ? "available" : "not available");

        joystick = new VirtualJoystick({
            container: $(elementID)[0],
            baseElement: $(elementID)[0],
            mouseSupport: true,
        });
        joystick.addEventListener('touchStart', function () {
            console.log('down')
        })
        joystick.addEventListener('touchEnd', function () {
            console.log('up')
        })

//        setInterval(function () {
//            var outputEl = document.getElementById('result');
//            outputEl.innerHTML = '<b>Result:</b> '
//                    + ' dx:' + joystick.deltaX()
//                    + ' dy:' + joystick.deltaY()
//                    + (joystick.right() ? ' right' : '')
//                    + (joystick.up() ? ' up' : '')
//                    + (joystick.left() ? ' left' : '')
//                    + (joystick.down() ? ' down' : '')
//        }, 1 / 30 * 1000);
    }


    return fn;

}