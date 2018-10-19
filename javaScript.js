function inventory() {
    var source = document.getElementById("inventory").innerHTML;
    var template = Handlebars.compile(source);
    var div = document.getElementById("bicycles");
    for (bikes of INVENTORY.bikes) {
        var html = template(bikes);
        div.insertAdjacentHTML("beforeend", html);
    }
}

window.addEventListener("load", inventory);
