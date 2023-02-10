let home = 0
let guest = 0

// home counter scoreboard
document.getElementById("add-1").onclick = function() {
    home += 1;
    document.getElementById("home-el").textContent = home
}
document.getElementById("add-2").onclick = function() {
    home += 2;
    document.getElementById("home-el").textContent = home
}
document.getElementById("add-3").onclick = function() {
    home += 3;
    document.getElementById("home-el").textContent = home
}

// guest counter
document.getElementById("add1").onclick = function() {
    guest += 1;
    document.getElementById("guest-el").textContent = guest;
}
document.getElementById("add2").onclick = function() {
    guest += 2;
    document.getElementById("guest-el").textContent = guest;
}
document.getElementById("add3").onclick = function() {
    guest += 3;
    document.getElementById("guest-el").textContent = guest;
}