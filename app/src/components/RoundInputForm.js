import {useState, useRef} from 'react';


const RoundInputForm = ({rounds, setRounds}) => {

    
    const newRoundInput = useRef();

    const addNewRound = (e) => {
        e.preventDefault();
      const newRound = {
        round: rounds.length + 1,
        date: new Date().toISOString().slice(0, 10),
        slopeRating: 113,
        courseRating: 69.1,
        name: 'playerName.current.value',
        score: Number(newRoundInput.current.value),
      }
      // update scores state
      setRounds([...rounds, newRound]);
      newRoundInput.current.value = '';
    }

    return (
        <div>
            <form onSubmit={e => addNewRound(e)}>
                <input type="text" placeholder="Enter your score" ref={newRoundInput}/>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
    }

    export default RoundInputForm;