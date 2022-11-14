import './CharacterCard.css'

function CharacterCard({character}) {
    
  return (
    <div className='card'>
        <img className='card-img' src={character.image}/>
        <p className='card-name'>{character.name}</p>
    </div>
  )
}

export default CharacterCard