let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset-btn");
let newGamebtn=document.querySelector("#new-btn");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");

let turn0=true;
let count=0;

const arr=[[0, 1, 2], 
         [3, 4, 5], 
         [6, 7, 8],
         [1, 4, 7], 
         [2, 5, 8], 
         [0, 3, 6], 
         [0, 4, 8], 
         [2, 4, 6] ];

const resetGame=()=>
{
    turn0=true;
    enableBoxes();
    count=0;
    msgContainer.classList.add("hide");
}


const gameDraw = () => {
  msg.innerText = `Game was a Draw.`;
  msgContainer.classList.remove("hide");
  disableBoxes();
};

boxes.forEach((box)=>{
    box.addEventListener("click", ()=>
    {
        console.log("box was clicked");
        if(turn0)
        {
            box.innerText="O";
            turn0=false;
        }
        else{
            box.innerText="X";
            turn0=true;
        }
        box.disabled=true;
        count++;

        let isWinner=checkWinner();
        if(count === 9 && !isWinner)
        {
            gameDraw();
        }
    });
});

const disableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=true;
    }
}

const enableBoxes=()=>
{
    for(let box of boxes)
    {
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
    msg.innerText=`Congratulations! Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner=()=>
{
    for(let position of arr)
    {
        let posVal1=boxes[position[0]].innerText;
        let posVal2=boxes[position[1]].innerText;
        let posVal3=boxes[position[2]].innerText;

        if(posVal1!="" && posVal2!="" && posVal3!="")
        {
            if(posVal1===posVal2 && posVal2===posVal3)
            {
                //  console.log("Winner", posVal1);
                 showWinner(posVal1);

            }
        }
    }
};

newGamebtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);

