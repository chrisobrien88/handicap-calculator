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
        {   "id": 1,
            "score": 40,
            "date": "2018-05-06",
            "slopeRating": 113,
            "courseRating": 69.1,
            "course": "Thurlestone"
        },
        {   "id": 2,
            "score": 38,
            "date": "2019-01-02",
            "slopeRating": 115,
            "courseRating": 69.1,
            "course": "The Berkshire"
        },
        {   "id": 3,
            "score": 42,
            "date": "2020-01-02",
            "slopeRating": 115,
            "courseRating": 69.1,
            "course": "Thurlestone"
        },
        {   "id": 4,
            "score": 29,
            "date": "2020-01-02",
            "slopeRating": 115,
            "courseRating": 69.1,
            "course": "Thurlestone"
        },
        {   "id": 5,
            "score": 38,
            "date": "2020-01-02",
            "slopeRating": 115,
            "courseRating": 69.1,
            "course": "Thurlestone"
        },
        {   "id": 6,
            "score": 37,
            "date": "2020-01-02",
            "slopeRating": 115,
            "courseRating": 69.1,
            "course": "Thurlestone"
        },
      ]
  },
  {
    "playerName": "ben",
    "playerId": "ben-macandrews",
    "rounds": [
        {   "id": 1,
            "score": [
              {"eagles": 0},
              {"birdies": 0},
              {"pars": 0},
              {"bogeys": 0},
              {"doubleBogeys": 0},
              {"tripleBogeys": 0},
              {"quadrupleBogeys": 0},
              {"pickUps": 0}
            ],
            "date": "2019-01-01",
            "slopeRating": 130,
            "courseRating": 69.1,
            "course": "Amendoeira - Faldo Course"
        },
        {   "id": 2,
            "score": [
              {"eagles": 0},
              {"birdies": 0},
              {"pars": 0},
              {"bogeys": 0},
              {"doubleBogeys": 0},
              {"tripleBogeys": 0},
              {"quadrupleBogeys": 0},
              {"pickUps": 0}
            ],
            "date": "2019-01-02",
            "slopeRating": 125,
            "courseRating": 69.1,
            "course": "Richmond"
        },
        {   "id": 3,
            "score": [
              {"eagles": 0},
              {"birdies": 0},
              {"pars": 0},
              {"bogeys": 0},
              {"doubleBogeys": 0},
              {"tripleBogeys": 0},
              {"quadrupleBogeys": 0},
              {"pickUps": 0}
            ],
            "date": "2019-01-02",
            "slopeRating": 130,
            "courseRating": 69.1,
            "course": "Richmond"
        }
      ]
  },
  {
    "playerName": "josh",
    "playerId": "josh-lee",
    "rounds": [
        {   "id": 1,
            "score": 24,
            "date": "2019-01-01",
            "slopeRating": 130,
            "courseRating": 69.1,
            "course": "Amendoeira - Faldo Course"
        },
        {   "id": 2,
            "score": 16,
            "date": "2019-01-02",
            "slopeRating": 125,
            "courseRating": 69.1,
            "course": "Richmond"
        },
        {   "id": 3,
            "score": 21,
            "date": "2019-01-02",
            "slopeRating": 130,
            "courseRating": 69.1,
            "course": "Richmond"
        }
      ]
  }
];

const [players, setPlayers] = useState(storedPlayers);
const [player, setPlayer] = useState('');
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
      
      {player? 
        <section className='player-info-container'>
          <h5>Player: {player.playerName}</h5>
          <RoundInputForm 
            rounds={rounds} 
            setRounds={setRounds} 
            player={player} />
          <div>
            <RoundsList rounds={rounds} scores={scores}/>
          </div>
        </section>  : null}
      
    </div>
  );

}

export default App;
