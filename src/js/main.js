var App = function() {

    var fn = this;

    fn.onload = function(){};

    fn.onLoad = function(callback)
    {
        fn.onload = callback;
    };
    
    fn.init = function($)
    {
        ed.init($);

    }

    fn.load = function()
    {
        ljs.load('bundle_js', function(){

            jQuery(function($){

                console.log(fn.onload);

                fn.onload($);
                fn.init($);

            });

        });
    };

    return fn;
};

var app = new App();
