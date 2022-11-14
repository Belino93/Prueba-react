import './CharacterCard.css'

function CharacterCard({character}) {

  const clickHandler = (data) => {
    console.log(data.name)
  }

    
  return (
    <div className='card' onClick={() => {clickHandler(character)}}>
        <img className='card-img' src={character.image}/>
        <p className='card-name'>{character.name}</p>
    </div>
  )
}

export default CharacterCard