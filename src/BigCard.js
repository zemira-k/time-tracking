import "./BigCard.css";
import profile from "./images/image-jeremy.png";

function BigCard({ reportTypeClick, reportType }) {
  const handleClick = (e) => {
    reportTypeClick(e);
  };

  return (
    <div className="bigCard">
      <div className="bigCard_profile">
        <div className="profileImage">
          <img className="profile" src={profile} alt="profile" />
        </div>
        <div>
          <p className="bigCard_span">Report for</p>
          <p className="bigCard_title">Jeremy Robson</p>
        </div>
      </div>
      <div className="reportType">
        <p
          onClick={handleClick}
          className={reportType === "daily" ? "bigCard_reportType_active" : ""}
        >
          Daily
        </p>
        <p
          onClick={handleClick}
          className={reportType === "Weekly" ? "bigCard_reportType_active" : ""}
        >
          Weekly
        </p>
        <p
          onClick={handleClick}
          className={
            reportType === "Monthly" ? "bigCard_reportType_active" : ""
          }
        >
          Monthly
        </p>
      </div>
    </div>
  );
}

export default BigCard;
