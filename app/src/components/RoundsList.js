import RoundCard from './RoundCard';
import {useState, useRef, useEffect} from 'react';


const RoundsList = ({rounds, scores}) => {
    const [averageScores, setAverageScores] = useState('initial state');
    const [bestScoresAverage, setBestScoresAverage] = useState('initial state');
    const [handicap, setHandicap] = useState('initial state');

    // console.log(rounds, 'rounds in state from RoundsList');


    useEffect(() => {
        
            const scores = rounds.map(round => round.score)

            const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;
            setAverageScores(averageScore.toFixed(1));

            const numberOfRoundsCounted = (scores.length * 0.4).toFixed(0);
            const bestScoresAverage = scores.sort((a, b) => b - a).slice(0, numberOfRoundsCounted).reduce((a, b) => a + b, 0) / numberOfRoundsCounted;
            setBestScoresAverage(bestScoresAverage.toFixed(1));
        
            const handicap = 54 - bestScoresAverage
            setHandicap(handicap.toFixed(1));

    }, [rounds])


    return (
        <section>
            <article>
                <h5>Total Rounds: {rounds.length}</h5>
                {/* <h5>Rounds counted for handicap (top 40%) {rounds.length * 0.4.toFixed(0)}</h5> */}
                <h5>Average of your best rounds: {bestScoresAverage}</h5>
                <h5>Average of all Scores: {averageScores} </h5>
                <h5>Handicap Index: {handicap}</h5>
            </article>
            <section className='rounds-list-container'>
            {rounds.map((round, index) => {
                return (
                    <RoundCard key={round.id} score={round.score} course={round.course} date={round.date}/>
                )
            })}
            </section>
        </section>
    );
}

export default RoundsList;