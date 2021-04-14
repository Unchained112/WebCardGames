var VARIABLE = VARIABLE || (function(){
    var _args = {}; // private

    return {
        init : function(Args) {
            _args = Args;
            // some other initialising
        },
        my_variable : function(i) {
            return _args[i];
        }
    };
}());