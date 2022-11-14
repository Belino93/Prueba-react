import axios from "axios";
import { useState, useEffect } from "react";
import CharacterCard from "../CharacterCard/CharacterCard";
import './CharactersReq.css'

function CharactersReq() {
  const [characters, setCharacters] = useState([]);

 

  const getCharacters = async () => {
    const resp = await axios.get("https://rickandmortyapi.com/api/character");
    const data = resp.data.results;
    setCharacters(data)
  };

  

  if (characters.length === 0) {
    return (
      <div className="container-empty">
        <h1>Any characters</h1>
        <button onClick={getCharacters}>Get characters</button>
      </div>
    );
  }

  return (
    <div className="container">
        {characters.map((c) => 
            <CharacterCard key={c.id} character={c}/>
        )}
      
    </div>
  );
}

export default CharactersReq;
