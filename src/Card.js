import "./Card.css";
import ellipsis from "./images/icon-ellipsis.svg";

function Card({ data, reportType, style, cardImage }) {
  let newData = data.timeframes[reportType.toLowerCase()];

  return (
    <div className="card">
      <div className="back_card" style={style}>
        <div className="cardImage_container">
          <img className="cardImage" src={cardImage} alt="cardImage" />
        </div>
        <div className="front_card">
          <div className="card_title">
            <p className="card_title_text">{data.title}</p>
            <img className="card_ellipsis" src={ellipsis} alt="ellipsis" />
          </div>
          <div className="card_hours">
            <p className="card_current">{newData.current}hrs</p>
            <p className="card_previous">Previous - {newData.previous}hrs</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
