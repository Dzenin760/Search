import React, { useState } from "react";
import './App.css';

const Anime = [
  {
    Title: "Naruto",
    Year: "2002",
    imdbID: "tt0409591",
    Type: "anime",
    Poster: "https://cdn.myanimelist.net/images/anime/13/17405.jpg"
  },
  {
    Title: "Attack on Titan",
    Year: "2013",
    imdbID: "tt2560140",
    Type: "anime",
    Poster: "https://cdn.myanimelist.net/images/anime/10/47347.jpg"
  },
  {
    Title: "Death Note",
    Year: "2006",
    imdbID: "tt0877057",
    Type: "anime",
    Poster: "https://cdn.myanimelist.net/images/anime/9/9453.jpg"
  },
  {
    Title: "Fullmetal Alchemist: Brotherhood",
    Year: "2009",
    imdbID: "tt1355642",
    Type: "anime",
    Poster: "https://cdn.myanimelist.net/images/anime/1223/96541.jpg"
  },
  {
    Title: "My Hero Academia",
    Year: "2016",
    imdbID: "tt5626028",
    Type: "anime",
    Poster: "https://cdn.myanimelist.net/images/anime/10/78745.jpg"
  },
  {
    Title: "One Punch Man",
    Year: "2015",
    imdbID: "tt4508902",
    Type: "anime",
    Poster: "https://cdn.myanimelist.net/images/anime/12/76049.jpg"
  }
];

export default function App() {
  const [anime, setAnime] = useState(Anime);
  const [search, setSearch] = useState("");

  const handleSearch = (event) => {
    setSearch(event.target.value);
    const filteredAnime = Anime.filter((anime) =>
      anime.Title.toLowerCase().includes(event.target.value.toLowerCase())
    );
    setAnime(filteredAnime);
  };

  return (
    <div className="container">
      <input
        type="text"
        placeholder="Search for an anime..."
        value={search}
        onChange={handleSearch}
        style={{ marginBottom: "20px", padding: "10px", width: "100%" }}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "10px",
        }}
      >
        {anime.map((item) => (
          <div key={item.imdbID} className="card" style={{ width: "18rem" }}>
            <img src={item.Poster} className="card-img-top" alt={item.Title} />
            <div className="card-body">
              <h5 className="card-title">{item.Title}</h5>
              <p className="card-text">Type: {item.Type}</p>
              <p className="card-text">Year: {item.Year}</p>
              <a
                href={`https://www.imdb.com/title/${item.imdbID}`}
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View on IMDb
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
