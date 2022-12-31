import Fireworks from "@fireworks-js/react";
import "./App.css";
import s1 from "./sound/s1.mp3";
import s2 from "./sound/s2.mp3";
import s3 from "./sound/s3.mp3";
function App() {
  return (
    <div>
      <Fireworks
        size="cover"
        autoresize={true}
        opacity={0.5}
        acceleration={1.05}
        friction={0.97}
        gravity={1.5}
        particles={50}
        traceLength={3}
        traceSpeed={10}
        explosion={10}
        intensity={30}
        flickering={50}
        linestyle={"round"}
        delay={{ min: 30, max: 60 }}
        rocketsPoint={{ min: 50, max: 50 }}
        trace={{ min: 1, max: 2 }}
        brightness={{ min: 50, max: 80 }}
        decay={{ min: 0.015, max: 0.03 }}
        mouse={{ click: true, move: true, max: 1 }}
        width={100}
        height={100}
        sound={{
          enabled: true,
          files: [s1, s2, s3],
          volume: {
            min: 2,
            max: 5,
          },
        }}
        style={{
          top: "0",
          left: 0,
          width: "100vw",
          height: "99vh",
          position: "absolute",
          background: "#000",
        }}
      />
      <div
        style={{
          position: "relative",
          textAlign: "center",
          top: "25vh",
        }}
      >
        <h1
          style={{
            fontWeight: " bold",
            fontSize: " 100px",
            display: "inline-block",
          }}
          className="animate-charcter"
        >
          HAPPY NEW YEAR <br />
          <span>2023</span>
        </h1>
      </div>
      <footer
        style={{ position: "absolute", color: "white", bottom: 5, left: 20 }}
      >
        Made with love by{" "}
        <a
          style={{ color: "white" }}
          target="_blank"
          href="https://github.com/hasannayeem71" rel="noreferrer"
        >
          {" "}
          Mahmudul Hasan Nayeem
        </a>
      </footer>
    </div>
  );
}

export default App;
