let Score=JSON.parse(localStorage.getItem('Score'));

        if(Score == null){
            Score={
                Win:0,
                Lose:0,
                Tie:0
            }
        }

        JSON.parse(localStorage.getItem('Score'));
        
        function Playgame(userMove){
            let number=Math.random();

            let computerMove=0;

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

            localStorage.setItem('Score' , JSON.stringify(Score));

            updateScore();
            document.querySelector('.Result').innerHTML=`Result: You ${result}`;
            document.querySelector('.Moves').innerHTML=`Your Move <img class="move-icon" src="icons/${userMove}-emoji.png"> - <img class="move-icon" src="icons/${computerMove}-emoji.png">  computerMove`;
                
            
        }

        function updateScore(){
            let val=document.querySelector('.RPS-Score');
            val.innerHTML=`Wins:${Score.Win}  Loses:${Score.Lose}  Ties:${Score.Tie}`;
        }