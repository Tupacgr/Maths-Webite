let button1 = document.getElementById("button1");
button1.addEventListener("click", changepage1, true);
function changepage1() {
    window.location.href="../html_files/ej_2.html";
}
let button2 = document.getElementById('button2');
button2.addEventListener('click', changepage2, true);
function changepage2() {
    window.location.href='../html_files/sim.html';
}
let button3 = document.getElementById('button3');
button3.addEventListener('click', changepage3, true);
function changepage3() {
    window.location.href='../html_files/fun1.html';
}