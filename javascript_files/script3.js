function calculate() {
    let input = document.getElementById('input').value;
    let answer = document.getElementById('answer');
    let a = math.simplify(input).toString();
    answer.textContent = 'Answer: ' + a;
}
setInterval(calculate,500);
function calculate1() {
    let input1 = document.getElementById('input1').value;
    let ss = document.getElementById('ss');
    let ss1 = math.sqrt(input1).toString();
    ss.textContent = ss1;
}
setInterval(calculate1,500);
function home1() {
    window.location.href='../html_files/index.html';
}
let home = document.getElementById('home');
home.addEventListener('click', home1, true);