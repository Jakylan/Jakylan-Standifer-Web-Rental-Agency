function inventory() {
    var source = document.getElementById("inventory").innerHTML;
    var template = Handlebars.compile(source);
    var div = document.getElementById("bicycles");
    for (bikes of INVENTORY.bikes) {
        var html = template(bikes);
        div.insertAdjacentHTML("beforeend", html);
    }
}

window.addEventListener("load", startUp);

function form() {
    var button = document.querySelectorAll("button");
    for (var i in button) {
        let index = i;
        button[i].addEventListener("click", function() {
            var form = document.getElementById("form");
            form.style.display = "block";
            var bikeInfo = document.getElementById("bicycles");
            bikeInfo.style.display = "none";
        });
    }
}

function thankYou() {
    var button = document.querySelectorAll("button");
    for (var i in button) {
        let index = i;
        button[i].addEventListener("click", function() {
            var form = document.getElementById("thankYou");
            form.style.display = "block";
            var bikeInfo = document.getElementById("form");
            bikeInfo.style.display = "none";
        });
    }
}

function startUp() {
    inventory();
    form();
    thankYou();
}
