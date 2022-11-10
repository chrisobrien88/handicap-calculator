
const RoundCard = ({score, course, date}) => {
  return (
    <article className="round-card">
      <h5>Date: {date}</h5>
      <h5>Score: {score}</h5>
      <h5>Course: {course}</h5>
    </article>
  )
}

export default RoundCard;