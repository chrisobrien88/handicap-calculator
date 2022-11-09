import {useState, useRef, useEffect} from 'react';
import './App.css';
import RoundsList from "./components/RoundsList";
import RoundInputForm from "./components/RoundInputForm";


function App() {

const storedPlayers = localStorage.getItem('storedPlayers') || [
  {
    "playerName": "chris",
    "playerId": "chris-obrien",
    "rounds": [
        {   "round": 1,
            "score": 36,
            "date": "2019-01-01",
            "slopeRating": 113,
            "courseRating": 69.1,
            "course": "Thurlestone"
        },
        {   "round": 2,
            "score": 38,
            "date": "2019-01-02",
            "slopeRating": 115,
            "courseRating": 69.1,
            "course": "Thurlestone"
        },
        {   "round": 3,
            "score": 38,
            "date": "2019-01-02",
            "slopeRating": 115,
            "courseRating": 69.1,
            "course": "Thurlestone"
        }
      ]
  },
  {
    "playerName": "ben",
    "playerId": "ben-macandrews",
    "rounds": [
        {   "round": 1,
            "score": 46,
            "date": "2019-01-01",
            "slopeRating": 113,
            "courseRating": 69.1,
            "course": "Thurlestone"
        },
        {   "round": 2,
            "score": 42,
            "date": "2019-01-02",
            "slopeRating": 115,
            "courseRating": 69.1,
            "course": "Thurlestone"
        }
      ]
  }
];

const [player, setPlayer] = useState('');
const [players, setPlayers] = useState(storedPlayers);
const [handicap, setHandicap] = useState('');
const [rounds, setRounds] = useState([]);
const [scores, setScores] = useState([]);

const playerName = useRef();

const findPlayer = (e) => {
  e.preventDefault();
  storedPlayers.find(player => {
      if (player.playerName === playerName.current.value) {
          setPlayer(player);
      }
  })
  playerName.current.value = '';
}

useEffect(() => {
  
    const scores = [];
    if (player) { player.rounds.map(round => {
        scores.push(round.score);
    }) 
    }
    console.log(scores);
    setScores(scores);

    const rounds = [];
    if (player) { player.rounds.map(round => {
        rounds.push(round);
    }) 
    }
    setRounds(rounds)
  
}, [player])




  return (
    <div>
      <h1>Calculate your handicap</h1>

      <form onSubmit={e => findPlayer(e)}>
          <input required type="text" placeholder="Enter your first name" ref={playerName}/>
          <button type="submit">Submit</button>
      </form>
      <h3>{player.playerName}</h3>
      <div>
        <RoundsList rounds={rounds} scores={scores}/>
      </div>
        <RoundInputForm rounds={rounds} setRounds={setRounds}/> 
    </div>
  );
}

export default App;
