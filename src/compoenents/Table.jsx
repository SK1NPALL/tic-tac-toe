import React from 'react'

export default function Table({ turn, setTurn }) {

    const [tb,setTb] = React.useState([0,0,0,0,0,0,0,0,0]);


    function tttChecker(name, ary1) {

        document.getElementById(name).textContent = turn;
        tb[ary1] = turn;
        
        if ([tb[0],tb[1],tb[2]].every(val => val === "X") || [tb[0],tb[1],tb[2]].every(val => val === "O")) {

            alert(turn + " Wins!");
            window.location.reload();

        }else if ([tb[3],tb[4],tb[5]].every(val => val === "X") || [tb[3],tb[4],tb[5]].every(val => val === "O")){

            alert(turn + " Wins!");
            window.location.reload();

        }else if ([tb[6],tb[7],tb[8]].every(val => val === "X") || [tb[6],tb[7],tb[8]].every(val => val === "O")){

            alert(turn + " Wins!");
            window.location.reload();

        }else if ([tb[0],tb[3],tb[6]].every(val => val === "X") || [tb[0],tb[3],tb[6]].every(val => val === "O")){

            alert(turn + " Wins!");
            window.location.reload();

        }else if ([tb[1],tb[4],tb[7]].every(val => val === "X") || [tb[1],tb[4],tb[7]].every(val => val === "O")){

            alert(turn + " Wins!");
            window.location.reload();

        }else if ([tb[2],tb[5],tb[8]].every(val => val === "X") || [tb[2],tb[5],tb[8]].every(val => val === "O")){

            alert(turn + " Wins!");
            window.location.reload();

        }else if ([tb[0],tb[4],tb[8]].every(val => val === "X") || [tb[0],tb[4],tb[8]].every(val => val === "O")){

            alert(turn + " Wins!");
            window.location.reload();

        }else if ([tb[2],tb[4],tb[6]].every(val => val === "X") || [tb[2],tb[4],tb[6]].every(val => val === "O")){

            alert(turn + " Wins!");
            window.location.reload();

        }else if (!tb.includes(0)) {

            alert("Draw!");
            window.location.reload();

        }

        setTurn(turn === "X"?"O" : "X");

        console.log(tb);

    }

    return (
        <div id="container-table">

            <div id='item1' onClick={() => tttChecker("item1", 0)}></div>
            <div id='item2' onClick={() => tttChecker("item2", 1)}></div>
            <div id='item3' onClick={() => tttChecker("item3", 2)}></div>
            <div id='item4' onClick={() => tttChecker("item4", 3)}></div>
            <div id='item5' onClick={() => tttChecker("item5", 4)}></div>
            <div id='item6' onClick={() => tttChecker("item6", 5)}></div>
            <div id='item7' onClick={() => tttChecker("item7", 6)}></div>
            <div id='item8' onClick={() => tttChecker("item8", 7)}></div>
            <div id='item9' onClick={() => tttChecker("item9", 8)}></div>

        </div>
    )
}