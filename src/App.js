import { useState } from "react";
import "./styles.css";

var songsDictionary = {
  pop: [
    "Take On Me(A-ha)",
    "Far Away(Nickelback)",
    "Baby One More Time(Britney Spears)"
  ],
  "hip-hop": [
    "In da Club(50 Cent )",
    "Passing Me By(The Pharcyde)",
    "Lose Yourself(Eminem)"
  ],
  jazz: [
    "At Last(Etta James)",
    "What a Wonderful World(Louis Armstrong)",
    "Cry Me a River(Julie London)"
  ]
};

var songRating = {
  "Take On Me(A-ha)": "4/5",
  "Far Away(Nickelback)": "4.5/5",
  "Baby One More Time(Britney Spears)": "4/5",
  "In da Club(50 Cent )": "5/5",
  "Passing Me By(The Pharcyde)": "4.2/5",
  "Lose Yourself(Eminem)": "5/5",
  "At Last(Etta James)": "4.7/5",
  "What a Wonderful World(Louis Armstrong)": "5/5",
  "Cry Me a River(Julie London)": "4.5/5"
};

var genres = Object.keys(songsDictionary);

export default function App() {
  var [genre, setGenre] = useState("jazz");

  function genreClickHandler(genre) {
    var newGenre = genre;
    setGenre(newGenre);
  }

  return (
    <div className="App">
      <h1>
        <span role="img" aria-label="notes">
          🎶
        </span>
        goodsongs
      </h1>
      <div style={{ fontSize: "larger" }}>
        Check out my favorite songs. Select a genre to get started
      </div>

      {genres.map(function (genre) {
        return (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              fontSize: "1.5rem",
              margin: "1rem",
              padding: ".2rem 1rem",
              cursor: "pointer",
              borderRadius: "5px"
            }}
            key={genre}
          >
            {genre}
          </button>
        );
      })}
      <hr></hr>
      <ul>
        {songsDictionary[genre].map(function (song) {
          return (
            <li key={song}>
              <div
                className="song"
                style={{ fontSize: "larger", fontWeight: "505" }}
              >
                {song}
              </div>
              <div>{songRating[song]}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
