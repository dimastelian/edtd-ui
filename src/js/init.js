var ED = function() {
    
    var $ = false;
    
    this.init = function(jq) {
        
        $ = jq;
                
        var fs = this.fullScreen();        
        fs.onClick('#btnFullScreen');
        this.setup_tabs();
        this.setup_joystick();

    }
    
    this.setup_tabs = function() {
        var tabs = this.tabs();
        tabs.init($);
    }
    this.setup_joystick = function() {
        var joy = this.joystick();
        joy.init($);
    }

    return this;
};

var ed = new ED();