import RoundCard from './RoundCard';
import {useState, useRef, useEffect} from 'react';


const RoundsList = ({rounds}) => {
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
            <article className='card stats'>
                <p>Handicap Index: <p className='stats-text handicap'>{handicap}</p></p>
                <p>Total Rounds: <p className='stats-text'>{rounds.length}</p></p>
                <p>Average of your best rounds: <p className='stats-text'>{bestScoresAverage}</p></p>
                <p>Average of all Scores: <h5>{averageScores}</h5></p>
            </article>
            <section className='list-container'>
            {rounds.sort((a, b) => b.id - a.id)
            .map((round, index) => {
                console.log(round);
                return (
                    <RoundCard key={round.id}
                        score={round.score}
                        course={round.course}
                        date={round.date}
                        slopeRating={round.slopeRating}
                        courseRating={round.courseRating}/>
                )
            })}
            </section>
        </section>
    );
}

export default RoundsList;