const main = document.querySelector('.main');
const cancel = document.querySelector('.cancel');
const msg = document.querySelector('#msg');

while (true) {
    let n = prompt("enter your name");

    if(n == null) {
        main.style.display = "none";
        cancel.style.display = "flex";
        msg.innerHTML = "but i love you!!";
    }
    if (n.length > 0){
        alert("what if subukan natin ulet?");
        alert("what if matutunan moren akong mahalin");
        alert("what if this time mag work na?")
        alert("atleast sinubukan natin dba?" + n );
        main.style.display = 'block';
        break;
    }
}