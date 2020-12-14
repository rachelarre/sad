import React from "react";
import "./css/App.css";
import { ImgMediaCard } from "./ImageCard";

function AffectiveDiplay() {
  return (
    <section className="content">
      <div className="section">
        <ImgMediaCard className="mediablock" />

        <div className="textblock">
          <h1 className="text-spacing">[S]easonal [A]ffective [D]isplay</h1>
          <p className="text-spacing">
            A daily snap shot of the temperature and sunlight outside my window.
            It often hard to mark the passing of the seasons or realize how much
            daylight you have gotten in a day. I wanted to create an ambient way
            to visualization the affective feeling of the weather.
          </p>
          <p className="text-spacing">
            This visualization uses data gathered from sensors connected to a
            Particle Photon outside my window. The temperature and light
            information controls the direction of the wave motion, starting
            location, and angle of the curve.
          </p>
          <div className="btn-fill btn-standard">Download(Soon)</div>
        </div>
      </div>
    </section>
  );
}

export default AffectiveDiplay;
