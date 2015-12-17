window.onload = function() {

    var log = document.getElementById("log");
    var btn = document.getElementById("btn");
    var counting = false;

    function start(count) {
        console.log(counting);
        if (!counting) {
            counting = true;
            log.innerHTML = count;
            var timer = setInterval(function() {
                if (count >= 0) {
                    log.innerHTML = count;
                    count--;
                } else {
                    clearInterval(timer);
                    count = arguments[0];
                    counting = false;
                }
            }, 1000);
        }
    }

    btn.onclick = function() {
        start(60);
    };

};
