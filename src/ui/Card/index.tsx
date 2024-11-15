import './card.css'

const Card = () => {
  return (
    <article className='card'>
      <div className="card__head">
        <span className="card__head-category">Категория 1</span>
        <h3>ITAM&SAMDay – самая настоящая удача!</h3>
      </div>
      <span>13 дек 2020</span>
    </article>
  );
}

export default Card;