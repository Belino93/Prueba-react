import "./Home.css";
import { bringMovies } from "../../services/apiCall";
import { useState } from "react";
import { useEffect } from "react";
import { Spinner } from 'react-bootstrap';


function Home() {
  const [movies, setMovies] = useState([]);

  
  useEffect(() => {
    if(movies.length === 0){
      bringMovies().then((movies) => {setMovies(movies)})
    }
  }, [])


  if(movies.length > 0){
    return (
      <div className="container">
        {movies.map((m) => (
          <div key={m.movie_id} className="card" onClick={() => clikedCharacter(m)}>
          <img className="card-img" src={ "https://image.tmdb.org/t/p/w200/" +m.poster} />
          <p className="card-name">{m.title}</p>
          </div>
        ))}
      </div>
    );
  }else{
    return(
      <div>
        <Spinner animation="border" variant="primary" />
      </div>
    )
  }
}

export default Home;
