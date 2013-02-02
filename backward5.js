(function($) {
    $.fn.backward5 = function() {
        //provide alternative rendering support for following input types:
        //range, date, color, number
        var renderStrategies = {
            range : function() {
                var _id = "div_" + this.id;
                $( this ).replaceWith('<div id="' + _id + '/>')
                return $( "#" + _id ).slider( {max:parseInt(this.max), min:parseInt(this.min)} );
            },
            date : function() {
                return $( this ).datepicker();
            },
            color : function() {
                var el = $( this );
                if( typeof el.colorPicker == 'function') {
                    return el.colorPicker();
                }
                return null;
            },
            number : function() {
                return $( this ).spinner();
            }
        };
        //provide alternative validating support for following input types:
        //range, date, color, email, month, number, search, tel, time, url, week, datetime, datetime-local

        //do the work:
        var debug = arguments[0] || false;
        var debugStyles = [ { 'background-color' : '#90ee90', 'border' : '1px solid #00ff00' },
                            { 'background-color' : '#ffffe0', 'border' : '1px solid #ffff00' } ];
        var i=0;
        while( i<this.length ) {
            var input = this[i];
            if( input.type && input.type == "text") {
                var attr = input.getAttribute("data-bw-type");
                if( attr && attr != "text" && renderStrategies[attr]) {
                    var ret = renderStrategies[attr].apply(input,[]);
                    if( debug ) {
                        var p = $(input).parent();
                        var s = debugStyles[1];
                        if( ret ) {
                            p = ret.parent();
                            s = debugStyles[0];
                        }
                        for( var styleProp in s ) {
                            p.css(styleProp, s[styleProp]);
                        }
                    }
                }
            }
            i++;
        }
    };
})(jQuery);