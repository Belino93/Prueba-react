import { useState, useEffect } from "react";
import "./DetailsCard.css";
import { useSelector } from "react-redux";
import { characterData } from "../CharactersReq/characterSlice";

function DetailsCard() {
  const selectedCharacter = useSelector(characterData);

  if(selectedCharacter?.id !== undefined){
    console.log(selectedCharacter);
    return (
      <div className='detail-container'>
      <div className='detail-card'>
        <img className='detail-card-img' src={selectedCharacter.image} />
        <h2 className='detail-card-name'>{selectedCharacter.name}</h2>
        <p className='detail-card-text'>{selectedCharacter.gender}</p>
      </div>
      <div className='detail-container-text'>
      <p>Status: {selectedCharacter.status}</p>
      <p>Origin: {selectedCharacter.origin.name}</p>
      <p>Specie: {selectedCharacter.species}</p>
      </div>
      </div>);
  }
  
  
}

export default DetailsCard;
