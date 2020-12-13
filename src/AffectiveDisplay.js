import React from "react";
import "./css/App.css";
import { ImgMediaCard } from "./ImageCard";

function AffectiveDiplay() {
  return (
    <section className="section">
      <ImgMediaCard className="mediablock" />

      <section className="textblock">
        <h1 className="text-spacing">[S]easonal [A]ffective [D]isplay</h1>
        <p className="text-spacing">
          A daily snap shot of the temperature and sunlight outside my window.
          It often hard to mark the passing of the seasons or realize how much
          daylight you have gotten in a day. SAD uses data gathered from sensors
          outside your window to give a live snapshot of the affective feeling
          on a day.
        </p>
        <div className="btn-fill btn-standard">Download</div>
      </section>
    </section>
  );
}

export default AffectiveDiplay;
