(function($) {
    $.fn.backward5 = function() {
        //provide alternative support for following input types:
        //range, date, color, email, month, number, search, tel, time, url, week, datetime, datetime-local
        var workarounds = {
            range : function() {
                var _id = "div_" + this.id;
                $( this ).replaceWith('<div id="' + _id + '"/>');
                $( this ).slider( {max:parseInt(this.max), min:parseInt(this.min)} );
            },
            date : function() {
                $( this ).datepicker();
            },
            color : function() {
                $( this ).colorPicker();
            },
            email : function() {
                //support this
            },
            month : function() {
                //support this
            },
            number : function() {
                $( this ).spinner();
            },
            search : function() {
                //support this
            },
            tel : function() {
                //support this
            },
            time : function() {
                //support this
            },
            url : function() {
                //support this
            },
            week : function() {
                //support this
            },
            datetime : function() {
                //support this
            }
        };

        var debug = arguments[0] || false;
        var i=0;
        while( i<this.length ) {
            var input = this[i];
            if( input.type && input.type == "text") {
                var attr = input.getAttribute("data-mytype");
                if( attr && attr != "text" && workarounds[attr]) {
                    if( debug ) {
                        var p = $( input ).parent();
                        if(p) {
                            p.css("background-color","#90ee90");
                            p.css("border","1px solid #00ff00");
                        }
                    }
                    workarounds[attr].apply(input,[]);
                }
            }
            i++;
        }
    };
})(jQuery);