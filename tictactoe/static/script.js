const coordinates = [['top-left','top-middle','top-right'],
                     ['middle-left','middle-middle','middle-right'],
                     ['bottom-left','bottom-middle','bottom-right']];

user = 'X';
computer = 'O';

document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll('.col').forEach(box => {
        box.addEventListener('click', (event) => {
            if(event.target.innerHTML.trim()){
                console.log("Not Allowed");
            }
            else{
                event.target.innerHTML = `<span>${user}</span>`;
            }
        });
    });
    document.querySelector(".selector .start-btn").onclick = () => {
        document.querySelector('.sign-choice').style.display = 'none';
        document.querySelector('.game').style.display = 'block';
    }
    document.querySelectorAll(".draw").forEach((btn) => {
        btn.addEventListener("click", (event) => {
            event.target.parentElement.parentElement.querySelector("input[type='radio']").checked = true;
            event.target.classList.add("selected");
            switch (event.target.id) {
                case "x":
                    document.querySelector("#o").classList.remove("selected");
                    user = "X";
                    computer = "O";
                    break;
                case "o":
                    document.querySelector("#x").classList.remove("selected");
                    user = "O";
                    computer = "X";
                    break;
                default:
                    break;
            }
        });
    })
})