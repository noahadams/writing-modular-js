define(['jquery'], function($) {

var setUp = function() {
    var $clickMe = $('.clickMe');
    $clickMe.on('click', function() {
        console.log("clicked");
        $clickMe.text("Thanks!");
    });
};

return setUp;

});
