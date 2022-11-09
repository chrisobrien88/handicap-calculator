import RoundCard from './RoundCard';

const RoundsList = ({rounds, scores}) => {
    console.log(rounds, 'rounds');
    console.log(scores, 'scores');
    return (
        <section>
            {scores.map(score => {
                return <RoundCard score={score}/>
            })}
        </section>
    );
}

export default RoundsList;