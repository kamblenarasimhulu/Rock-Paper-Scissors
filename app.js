let userScore=0;
let compScore=0;

const choices=document.querySelectorAll(".choice");
const msg=document.querySelector("#msg");

const userscorePara=document.querySelector("#user-score");
const compscorePara=document.querySelector("#comp-score");

const gencompchoice=()=>{
    const options=["rock","paper","scissors"];
    const randIdx=Math.floor(Math.random()*3);
    return options[randIdx];
}

const drawgame=()=>{
    msg.innerText="Its a Draw!";
    msg.style.backgroundColor="";
};

const showwinner=(userwin,userchoice,compchoice)=>{
    if(userwin){
        userScore++;
        userscorePara.innerText=userScore;
        msg.innerText=`You win! ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor="green";
    }
    else{
        compScore++;
        compscorePara.innerText=compScore;
        msg.innerText=`You lost! ${compchoice} beats ${userchoice}`;
        msg.style.backgroundColor="red";
    }
}

const playgame=(userchoice)=>{
//generate com choice
const compchoice=gencompchoice();

if(userchoice===compchoice){
    //draw game
    drawgame();
}
else{
    let userwin=true;
    if(userchoice==="rock"){
        //scissor,paper
        userwin=compchoice==="paper"? false:true;
    }else if(userchoice==="paper"){
        //rock,scissors
        userwin=compchoice==="scissors"? false:true;
    }else{
        //rock,paper
        userwin=compchoice==="rock"? false:true;
    }

    showwinner(userwin,userchoice,compchoice);
}
};
choices.forEach((choice)=>{
    choice.addEventListener("click",()=>{
        const userchoice=choice.getAttribute("id");
        playgame(userchoice);
    })
})