import {bringCharacters} from '../../services/apiCall'
import { useState, useEffect } from "react";
import "./CharactersReq.css";
import { useSelector, useDispatch } from "react-redux";
import {addCharacter} from './characterSlice';
import { useNavigate } from "react-router-dom";

function CharactersReq() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Hooks
  const [characters, setCharacters] = useState([]);

  useEffect(() => {

    if (characters.length === 0) {
        bringCharacters()
          .then((characters) => {
            setCharacters(characters)
          })
    }
  }, []);


  // Handlers
  const clikedCharacter = (character) => {
    dispatch(addCharacter({...character, details: character}))

    setTimeout(() => {
      navigate('/characterDetails')
    })
  }

  return (
    <div className="container">
      {characters.map((c) => (
        <div key={c.id} className="card" onClick={() => clikedCharacter(c)}>
        <img className="card-img" src={c.image} />
        <p className="card-name">{c.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CharactersReq;
