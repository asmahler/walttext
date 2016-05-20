(function() {
    function init() {
        var input = document.querySelector('input');
        var showNum = document.querySelector('span');
        var count = 0;
        input.onkeyup = function() {
            if (event.which !== 8) {
                showNum.innerHTML = count += 1;
            }
        }
    }



    window.onload = function() {
        init();
    }
}());