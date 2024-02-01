function calculate () {
    let ex1 = document.getElementById('ex1').value;
    let ex2 = document.getElementById('ex2').value;
    let fun = document.getElementById('fun').value;
    let f = document.getElementById('f');
    let a = document.getElementById('a');
    if (ex2>ex1) {
        let m1 = Math.floor(Math.random() * (ex2 - ex1) + ex1);
        let fun1 = fun.replace(/x/g,-m1);
        console.log(fun1);
        let fun2 = fun.replace(/x/g,m1);
        console.log(fun2);
        let ans1 = parseFloat(math.evaluate(fun1));
        let ans2 = parseFloat(math.evaluate(fun2));
        console.log(ans1);
        console.log(ans2);
        if (ans1 == ans2) {
            f.textContent = "The function is even";
        } else if (ans1 == -ans2) {
            f.textContent = "The function is odd";
        }
    } else {
        alert('Please type two extremes in ascending order!');
    }
}
//setInterval(calculate, 500);
function home1 () {
    window.location.href='../html_files/index.html';
}
let home = document.getElementById('home');
home.addEventListener('click', home1, true);