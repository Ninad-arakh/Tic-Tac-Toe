let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#resetB");
let newGame = document.querySelector("#newBtn");
let msgContainer = document.querySelector(".msgContainer");
let msg = document.querySelector("#msg");


let turnX = true;

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

boxes.forEach((box) => {
    box.addEventListener("click", ()=> {
        // console.log("box was clicked!");
        // box.innerText = "Ninad";
        if(turnX){
            box.innerText = "X";
            turnX = false;
        }
        else{
            box.innerText = "O";
            turnX = true;
        }

        box.disabled = true;
        checkWin();
    });
});

const resetG = () =>{
    turnX = true;
    msgContainer.classList.add("hide");
    enableBox();

}

const showWin = (winner) => {
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
};

const disabledBoxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBox = () => {
    for(let box of boxes){
        box.innerText = "";
        box.disabled = false;
    }
}

const checkWin = (() => {
    for(let pattern of winPatterns){
        // console.log(boxes[pattern[0]], boxes[pattern[1]], boxes[pattern[2]]);

        let pos0 = boxes[pattern[0]].innerText;
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;
        console.log(pos0);

        if(pos0 != "" && pos1 != "" && pos2 != ""){
            if(pos0 === pos1 && pos1 === pos2){
                console.log("winner", pos0);
                showWin(pos0);
            }
        }
    }
})


newGame.addEventListener("click", resetG);
resetbtn.addEventListener("click", resetG);