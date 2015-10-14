

var App = function() {

    var fn = this;

    fn.onload = function(){};

    fn.onLoad = function(callback)
    {
        fn.onload = callback;
    };

    fn.load = function()
    {
        ljs.load('bundle_js', function(){

            jQuery(function($){

                console.log(fn.onload);

                fn.onload($);

            });

        });
    };

    return fn;
};

var app = new App();
