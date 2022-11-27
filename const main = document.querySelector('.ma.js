const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("enter your name");

    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "thank you!";
    }
    if (n.length > 0){
        alert("what if gusto parin kita");
        alert("what if tayo nalang dalawa");
        alert("I LOVE YOU!!! + n");
        main.style.display = 'block';
        break;
    }
}