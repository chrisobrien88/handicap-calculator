
const RoundCard = ({score, course, date, slopeRating, courseRating}) => {
  return (
    <article className="round-card">
      <h5>Date: {date}</h5>
      <h5>Score: {score}</h5>
      <p>Course: {course}</p>
      <p>Slope Rating: {slopeRating}</p>
      <p>Course Rating: {courseRating}</p>

    </article>
  )
}

export default RoundCard;