
const RoundCard = ({score, course, date, slopeRating, courseRating}) => {
  return (
    <article className="card">
      <h5>Date: {date}</h5>
      <h3 className= {score >= 30 ? 'score good' : 'score bad'}>Score: {score}</h3>
      <p>Course: <h5>{course}</h5></p>
      <p>Slope Rating: <h5>{slopeRating}</h5></p>
      <p>Course Rating: <h5>{courseRating}</h5></p>

    </article>
  )
}

export default RoundCard;