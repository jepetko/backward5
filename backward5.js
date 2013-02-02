(function($) {
    $.fn.backward5 = function() {
        //provide alternative rendering support for following input types:
        //range, date, color, number
        var cfg = {
            renderStrategies:{
                range:function () {
                    var _id = "div_" + this.id;
                    $(this).replaceWith('<div id="' + _id + '"/>');
                    return $("#" + _id).slider({max:parseInt(this.max), min:parseInt(this.min)});
                },
                date:function () {
                    return $(this).datepicker();
                },
                color:function () {
                    var el = $(this);
                    if (typeof el.colorPicker == 'function') {
                        return el.colorPicker();
                    }
                    return null;
                },
                number:function () {
                    return $(this).spinner();
                }
            },
            //some debug styles to give the user feedback
            debug:arguments[0] || false,
            debugStyles:[
                { 'background-color':'#90ee90', 'border':'1px solid #00ff00' },
                { 'background-color':'#ffffe0', 'border':'1px solid #ffff00' }
            ]
        };

        this.each( function(cfg) {
            return function() {
                if( this.nodeName.toUpperCase() != "INPUT" ) return;
                if( this.type && this.type == "text") {
                    var attr = this.getAttribute("data-bw-type");
                    if( attr && attr != "text" && cfg.renderStrategies[attr]) {
                        var ret = cfg.renderStrategies[attr].apply(this,[]);
                        if( cfg.debug ) {
                            var p = $(this).parent();
                            var s = cfg.debugStyles[1];
                            if( ret ) {
                                p = ret.parent();
                                s = cfg.debugStyles[0];
                            }
                            for( var styleProp in s ) {
                                p.css(styleProp, s[styleProp]);
                            }
                        }
                    }
                }
                $(this).bind('invalid', function() {
                    //todo: add jQuery support for inputs w/o required property
                });
            }
        }(cfg));
    };
})(jQuery);