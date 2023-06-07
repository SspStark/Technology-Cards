import './index.css'

const Courses = props => {
  const {cardsList} = props
  const {title, description, imgUrl, className} = cardsList
  return (
    <li className={`card-item ${className}`}>
      <h1 className="title">{title}</h1>
      <p className="title-description">{description}</p>
      <div className="img-container">
        <img src={imgUrl} className="img" alt={title} />
      </div>
    </li>
  )
}

export default Courses
