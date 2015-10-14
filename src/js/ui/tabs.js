ED.prototype.tabs = function () {

    var fn = this;

    fn.init = function ($) {

        $('[data-rel="tab"]').each(function (el) {
            $(el).click(function (e) {
                e.preventDefault()
                $(this).tab('show')
            })
        })


    };

    return fn;
}