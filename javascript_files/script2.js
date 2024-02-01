function calculate(){
    let a = parseFloat(document.getElementById('a1').value);
    let b = parseFloat(document.getElementById('b1').value);
    let g = parseFloat(document.getElementById('g1').value);
    let X = document.getElementById('X11');
    if (!(isNaN(a)) && !(isNaN(b)) && !(isNaN(g))) {
        X.textContent = 'Solution: ' + (g-b)/(a);
    }
}
setInterval(calculate, 500);
function calculate1() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let g = parseFloat(document.getElementById("g").value);
    let X1 = document.getElementById("X1");
    let X2 = document.getElementById("X2");

    if (!(isNaN(a)) && !(isNaN(b)) && !(isNaN(g))) {
        let D = Math.sqrt((b**2)-(4*a*g));
        if (D>0) {
            X1.textContent = '1st Solution: ' + (-b+D)/(2*a);
            X2.textContent = '2nd Solution: ' + (-b-D)/(2*a);
        } else if (D==0) {
            X1.textContent = '1st Solution: ' + (-b)/(2*a);
            X2.textContent = '2nd Solution: ' +"The equation has only one solution.";
        } else {
            X1.textContent = "Impossible";
            X2.textContent = "Impossible";
        }
    } 
}
setInterval(calculate1, 500);
function home1() {
    window.location.href='../html_files/index.html';
}
let home = document.getElementById('home');
home.addEventListener('click', home1, true);