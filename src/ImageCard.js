import React from "react";
import firebase from "firebase";
import Sketch from "react-p5";

const firebaseConfig = {
  apiKey: "AIzaSyDlV3dNGoi7Tbq0WC-6M0VpL7_NDRKzmuw",
  authDomain: "sad-visualization.firebaseapp.com",
  databaseURL: "https://sad-visualization-default-rtdb.firebaseio.com",
  projectId: "sad-visualization",
  storageBucket: "sad-visualization.appspot.com",
  messagingSenderId: "788877370453",
  appId: "1:788877370453:web:6302b5919df429e98860dc",
};

let t = 0; // time variable

export class ImgMediaCard extends React.Component {
  constructor() {
    super();
    this.state = {
      lightdata: { light: 0 },
      tempdata: { temp: 0 },
    };
    this.setup = this.setup.bind(this);
    this.draw = this.draw.bind(this);
  }

  componentDidMount() {
    firebase.initializeApp(firebaseConfig);
    const database = firebase.database();

    database
      .ref("light")
      .limitToLast(80)
      .on("child_added", (snapshot) => {
        var data = snapshot.val();
        this.setState({ lightdata: data });
      });

    database
      .ref("temperature")
      .limitToLast(80)
      .on("child_added", (snapshot) => {
        var data = snapshot.val();
        this.setState({ tempdata: data });
      });
  }

  setup(p5, canvasParentRef) {
    p5.createCanvas(480, 480).parent(canvasParentRef);
    p5.noStroke();
    // p5.fill(255);
  }

  draw(p5) {
    const lightLvl = Number(this.state.lightdata.light);
    const tempLvl = Number(this.state.tempdata.temperature);

    let width = 480;
    let height = 480;
    let canvasColor = p5.color("#d299c2");
    canvasColor.setAlpha(5);
    p5.background(canvasColor); // translucent background (creates trails), next step add lerpcolor
    let variance = Math.min((lightLvl + tempLvl) / 24, 12);

    // make a x and y grid of ellipses
    for (let x = 0; x <= width; x = x + variance * 2) {
      for (let y = 0; y <= height; y = y + variance * 2) {
        // starting point of each circle depends on mouse position
        const xAngle = p5.map(
          lightLvl + variance,
          0,
          width,
          -4 * Math.PI,
          4 * Math.PI,
          true
        );
        const yAngle = p5.map(
          tempLvl + variance,
          0,
          height,
          -4 * Math.PI,
          4 * Math.PI,
          true
        );

        // and also varies based on the particle's location
        const angle = xAngle * (x / width) + yAngle * (y / height);

        // each particle moves in a circle
        const myX = x + (24 + variance) * Math.cos(2 * Math.PI * t + angle);
        const myY = y + (24 + variance) * Math.sin(2 * Math.PI * t + angle);

        p5.fill("#d299c2");
        p5.ellipse(myX, myY, 3);

        p5.fill("#FEF9D7");
        p5.ellipse(myY, myX, 2); // draw particle
      }
    }
    t = t + 0.0003; // update time
  }

  render() {
    let today = new Date();
    let timeOfDay =
      today.getMonth() +
      1 +
      "." +
      today.getDate() +
      " @" +
      today.getHours() +
      ":" +
      today.getMinutes();

    return (
      <div className="card">
        <div className="visualization-image">
          <Sketch setup={this.setup} draw={this.draw} />
        </div>
        <div className="card-caption">
          Ambient Light: {this.state.lightdata.light}&emsp;&emsp;|&emsp;&emsp;
          {this.state.tempdata.temperature}°C &emsp;&emsp;|&emsp; &emsp;
          {timeOfDay}
        </div>
      </div>
    );
  }
}
