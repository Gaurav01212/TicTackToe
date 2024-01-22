


import Card from "../Card/Card.jsx";
import '../Grid/Grid.css';
import { useState } from "react";
import checkWinner from '../../helpers/checkWinner.js';

function Grid({numberOfCards}){

    const[board,changeBoard]=useState(Array(numberOfCards).fill(""));
    const[turn,setTurn]=useState(true);
    const[winner,setWinner]=useState("");

    const reset=()=>{
        changeBoard(Array(numberOfCards).fill(""));
        setTurn(true);
        setWinner("");
    }

  const play=(index)=>{

         if(board[index]!="" || winner!="")return;
         
        if(turn){
            board[index]='O';
        }
        else{
            board[index]='X';
        }
        const win=checkWinner(board,(turn)?'O':'X');
        if(win=='X'){
            setWinner('X wins!');
        }
        else if(win=='O'){
            setWinner('O wins!');
        }
        


        changeBoard([...board]);
        setTurn(!turn);

        console.log(board)
  }
   



    return (

        <div className="grid-wrapper">

            <h1>Current Turn : 
               {(turn)?'O':'X'}
            </h1>

             <div   className="grid">
           
            {board.map((elem,index)=><Card player={elem} key={index} index={index} onPlay={play}/>)}
             </div>
             

            

            <button  onClick={reset}>Reset</button>
            {winner && (<h1>{winner}</h1>)}
        </div>

        
    )
}

export default Grid;