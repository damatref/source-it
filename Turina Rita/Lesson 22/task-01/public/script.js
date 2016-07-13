(function () {

    // function tabs(selector) {
    //     var item = $(selector).find('.active a');
    //     showTab(item);

    //     $(selector).find('a').click(function(ev) {
    //         ev.preventDefault();
    //         if (!$(this).parent().hasClass('active'))
    //            {showTab($(this));}        
    //    })
    // }
    // function showTab(item){
    //     var itemData = $(item).data('tabholder');

    //     $(selector).find('li').removeClass('active');
    //     $('.tab-content').hide();

    //     $(item).parent().addClass('active');
    //     $(itemData).show('slow');
    // }

    function hide(selector) {
        $(selector).hide();
        console.log (1);
    };
    hide('.content-block');
    'use strict';

    var ITERATIONS = 100000000;

    //Function that generates random coordinates for point(x:[-r,r), y:[-r,r))
    //and checks if it is in a circle with radius r
    var generatePoint = function () {
        var r = 16;
        var x = Math.random() * r * 2 - r;
        var y = Math.random() * r * 2 - r;
        return (Math.pow(x, 2) + Math.pow(y, 2) < Math.pow(r, 2))
    };

    //Return estimated value of Pi after all iterations
    var computePi = function () {
        var inCircle = 0;
        var i;
        for (i = 0; i < ITERATIONS; i++) {
            if (generatePoint()) {
                inCircle++;
            }
        }
        return inCircle / ITERATIONS * 4;
    };

    //Performs synchronous calculations of Pi after click on button
    document.querySelector('#syncstart').addEventListener('click', function () {
        document.querySelector('#syncresult').innerHTML = computePi();
    });
})();
