import { useState } from "react";
import "./styles.css";

var songsDictionary = {
  pop: [
    {
      name: "Take On Me(A-ha)",
      ratings: "4.5/5",
      description:
        "'Take On Me' is a song by the Norwegian synth-pop band A-ha. The original version, recorded in 1984 and released in October of that same year, was produced by Tony Mansfield and remixed by John Ratcliff. "
    },
    {
      name: "Far Away(Nickelback)",
      ratings: "4/5",
      description:
        "'Far Away' is a song by Canadian band Nickelback. First released on January 23, 2006, in Australia, it was the second international single and the fourth US single from the band's fifth album, All the Right Reasons (2005)."
    },
    {
      name: "Baby One More Time(Britney Spears)",
      ratings: "4/5",
      description:
        "'Baby One More Time' is the debut single of American singer Britney Spears from her debut studio album of the same title (1999). It was written by Max Martin and produced by Martin and Rami. The song is one of the best-selling singles of all time, with over 10 million copies sold. "
    }
  ],
  "hip-hop": [
    {
      name: "In da Club(50 Cent )",
      ratings: "4.5/5",
      description:
        "'In da Club' is a song by American rapper 50 Cent from his debut studio album Get Rich or Die Tryin' (2003). Written by 50 Cent alongside producers Dr. Dre and Mike Elizondo, the song was released in January 2003 as the album's lead single and peaked at number one on the US Billboard Hot 100."
    },
    {
      name: "Passing Me By(The Pharcyde)",
      ratings: "4/5",
      description:
        "'Passing Me By' is a song by American hip-hop group The Pharcyde, released in March 1993 through Delicious Vinyl Records. The song was the second single released from the group's 1992 debut album Bizarre Ride II the Pharcyde."
    },
    {
      name: "Lose Yourself(Eminem)",
      ratings: "5/5",
      description:
        "'Lose Yourself' is a song by American rapper Eminem from the soundtrack to the 2002 motion picture 8 Mile. It was a commercial success, becoming Eminem's first Billboard Hot 100 number-one single and remaining there for twelve consecutive weeks.."
    }
  ],
  jazz: [
    {
      name: "At Last(Etta James)",
      ratings: "4/5",
      description:
        "'At Last' is a song written by Mack Gordon and Harry Warren.In 1960, rhythm and blues singer Etta James recorded an arrangement by Riley Hampton that improvised on Warren's original melody."
    },
    {
      name: "What a Wonderful World(Louis Armstrong)",
      ratings: "5/5",
      description:
        "'What a Wonderful World' is a song written by Bob Thiele (as 'George Douglas') and George David Weiss. It was first recorded by Louis Armstrong and released in 1967 as a single. It topped the pop chart in the United Kingdom"
    },
    {
      name: "Cry Me a River(Julie London)",
      ratings: "4.5/5",
      description:
        "'Cry Me a River' is a popular American torch song, written by Arthur Hamilton, first published in 1953 and made famous in 1955 with the version by Julie London"
    }
  ]
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
                key={song.name}
                className="song"
                style={{ fontSize: "larger", fontWeight: "505" }}
              >
                {song.name}
              </div>
              <div>Ratings:{song.ratings}</div>
              <div>{song.description}</div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
