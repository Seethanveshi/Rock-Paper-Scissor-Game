let Score=JSON.parse(localStorage.getItem('Score'));
let array=JSON.parse(localStorage.getItem('array')) || [];

let userMove='Rock';
let computerMove='Rock';

if(Score == null){
    Score={
        Win:0,
        Lose:0,
        Tie:0
    }
}


function Playgame(userMove){
    let number=Math.random();
    userMove=userMove;
    computerMove=0;

    if(number>=0 && number<=1/3){
        computerMove='Rock';
    }
    else if(number>1/3 && number<=2/3){
        computerMove='Paper';
    }
    else{
        computerMove='Scissors';
    }

    let result='';

    if(userMove === 'Rock'){
        if(computerMove ==='Rock'){
            result='Tie';
        }
        else if(computerMove === 'Paper'){
            result='Lose';
        }
        else{
            result='Win';
        }
    }
    else if(userMove === 'Paper'){
        if(computerMove=='Rock'){
            result='Win';
        }
        else if(computerMove === 'Paper'){
            result='Tie';
        }
        else{
            result='Lose';
        }
    }
    else{
        if(computerMove=='Rock'){
            result='Lose';
        }
        else if(computerMove === 'Paper'){
            result='Win';
        }
        else{
            result='Tie';
        }
    }
    if(result=='Win'){
        Score.Win+=1;
    }
    else if(result=='Lose'){
        Score.Lose+=1;
    }
    else{
        Score.Tie+=1;
    }

    array.push(
        {
            userMove:userMove,
            computerMove:computerMove,
            result:result
        }
    )

    localStorage.setItem('Score' , JSON.stringify(Score));
    localStorage.setItem('array' , JSON.stringify(array));

    updateScore();
    document.querySelector('.Result').innerHTML=`Result: You ${result}`;
    document.querySelector('.Move').innerHTML=`Your Move <img class="move-icon" src="icons/${userMove}-emoji.png"> - <img class="move-icon" src="icons/${computerMove}-emoji.png">  computerMove`;
        
    
}

function updateScore(){
    let val=document.querySelector('.RPS-Score');
    val.innerHTML=`Wins:${Score.Win}  Loses:${Score.Lose}  Ties:${Score.Tie}`;
}

function resetScore(){
    array=[];
    localStorage.removeItem('Score');
    localStorage.removeItem('array');
}

let stop=0;

function review_result(){
    let review_button=document.querySelector('.review-button');
    let val=document.querySelector('.RPS-Score');
    val.innerHTML=`Wins:${Score.Win}  Loses:${Score.Lose}  Ties:${Score.Tie}`;
    stop+=1;
    if(array.length>0){
        let c=0;
        review_button.innerHTML='Stop';
        let id=setInterval( ()=>{
            if(c==array.length-1 || array.length==0 || stop%2==0){
                review_button.innerHTML='Review';
                clearInterval(id);
            }
            let u_m=array[c].userMove;
            let c_m=array[c].computerMove;
            let r=array[c].result;

            document.querySelector('.Result').innerHTML=`Result: You ${r}`;
            document.querySelector('.Move').innerHTML=`Your Move <img class="move-icon" src="icons/${u_m}-emoji.png"> - <img class="move-icon" src="icons/${c_m}-emoji.png">  computerMove`;
            c+=1;
            
        } , 1000);
    }
}

