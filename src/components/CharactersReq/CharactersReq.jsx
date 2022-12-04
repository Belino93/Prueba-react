import {bringCharacters} from '../../services/apiCall'
import { useState, useEffect } from "react";
import "./CharactersReq.css";
import { useSelector, useDispatch } from "react-redux";
import {addCharacter} from './characterSlice';
import { useNavigate } from "react-router-dom";
import { Spinner } from 'react-bootstrap';

function CharactersReq() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  //Hooks
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    
    if (characters.length === 0) {
      setTimeout(() => {
        bringCharacters()
          .then((characters) => {
            setCharacters(characters)
          })
      }, 1500)
    }
  }, []);


  // Handlers
  const clikedCharacter = (character) => {
    dispatch(addCharacter({...character, details: character}))

    setTimeout(() => {
      navigate('/characterDetails')
    })
  }
  if(characters.length > 0){
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
}else{
  return(
    <div>
      <Spinner animation="border" variant="primary" />
    </div>
  )
}

}


export default CharactersReq;
