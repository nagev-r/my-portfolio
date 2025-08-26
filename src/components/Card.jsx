import './Card.css';

function Card({title, media, date, technologies, description, variant}) {
    return (
        <div className={`card ${variant}`}>
            <h2>{title}</h2>
            {<img src={media} alt={title}/>}
            <p className= "subtext"> {date}</p>
            <p>{technologies.join(', ')}</p>
            <p>{description}</p>
        </div>
    )
} 
export default Card;