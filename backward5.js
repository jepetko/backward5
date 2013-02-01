var backward5 = function() {
    return new (function workarounds() {
        function $id(a) {
            return "#"+a;
        };
        //provide alternative support for following input types:
        //range, date, color, email, month, number, search, tel, time, url, week, datetime, datetime-local
        this.range = function() {
            var _id = "div_" + this.id;
            $( $id(this.id) ).replaceWith('<div id="' + _id + '"/>');
            $( $id(_id) ).slider( {max:parseInt(this.max), min:parseInt(this.min)} );
        };
        this.date = function() {
            $( $id(this.id) ).datepicker();
        };
        this.color = function() {
            $( $id(this.id)).colorPicker();
        };
        this.email = function() {
            //support this
        };
        this.month = function() {
            //support this
        };
        this.number = function() {
            $( $id(this.id) ).spinner();
        };
        this.search = function() {
            //support this
        };
        this.tel = function() {
            //support this
        };
        this.time = function() {
            //support this
        };
        this.url = function() {
            //support this
        };
        this.week = function() {
            //support this
        };
        this.datetime = function() {
            //support this
        };
        var inputs = arguments[0] || [];
        var debug = arguments[1] || false;
        var i=0;
        while( i<inputs.length ) {
            var input = inputs[i];
            if( input.type == "text") {
                var attr = input.getAttribute("data-mytype");
                if( attr && attr != "text" && this[attr]) {
                    if( debug ) {
                        var p = $( $id(input.id) ).parent();
                        if(p) {
                            p.css("background-color","#90ee90");
                            p.css("border","1px solid #00ff00");
                        }
                    }
                    this[attr].apply(input,[]);
                }
            }
            i++;
        };
    })($("input"),true);
};