import React, { useState } from "react";
import data from "./data.json";
import "./App.css";
import Card from "./Card";
import BigCard from "./BigCard";
import exercise from "./images/icon-exercise.svg";
import play from "./images/icon-play.svg";
import selfCare from "./images/icon-self-care.svg";
import social from "./images/icon-social.svg";
import study from "./images/icon-study.svg";
import work from "./images/icon-work.svg";

function App() {
  const [reportType, setReportType] = useState("Daily");

  const reportTypeClick = (e) => {
    setReportType(e.target.textContent);
  };

  const images = {
    work,
    play,
    study,
    exercise,
    social,
    "self care": selfCare,
  };

  const colorMap = {
    work: "hsl(15, 100%, 70%)",
    play: "hsl(195, 74%, 62%)",
    study: "hsl(348, 100%, 68%)",
    exercise: "hsl(145, 58%, 55%)",
    social: "hsl(264, 64%, 52%)",
    "self care": "hsl(43, 84%, 65%)",
  };

  return (
    <div className="page">
      <div className="dashboard">
        <BigCard reportTypeClick={reportTypeClick} reportType={reportType} />
        <div className="cards">
          {data.map((item) => (
            <Card
              key={item.id}
              data={item}
              reportType={reportType}
              style={{ backgroundColor: colorMap[item.title.toLowerCase()] }}
              cardImage={images[item.title.toLowerCase()]}
            />
          ))}
        </div>
      </div>

      <div className="attribution">
        Challenge by{" "}
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noopener noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by <a href="https://github.com/zemira-k" target="_blank"
          rel="noopener noreferrer">Zemira Kehati</a>.
      </div>
    </div>
  );
}

export default App;
