import {useState, useRef} from 'react';


const RoundInputForm = ({rounds, setRounds, player}) => {

    
    const newRoundInput = useRef();

    const addNewRound = (e) => {
        e.preventDefault();
      const newRound = {
        id: Date.now(),
        round: rounds.length + 1,
        date: new Date().toISOString().slice(0, 10),
        slopeRating: 113,
        courseRating: 69.1,
        name: player.playerName,
        playerId: player.playerId,
        score: Number(newRoundInput.current.value),
      }
      // update scores state
      setRounds([...rounds, newRound]);
      console.log(rounds.length);
      newRoundInput.current.value = '';
    }

    return (
        <div>
            <form onSubmit={e => addNewRound(e)}>
                <input required type="text" placeholder="Enter score e.g. 36" ref={newRoundInput}/>
                <button class = 'button' type="submit" >Submit</button>
            </form>
        </div>
    );
    }

    export default RoundInputForm;