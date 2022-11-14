import './Header.css'
import { useNavigate } from 'react-router-dom'

function Header() {
    const wander = useNavigate();
  return (
    <div className='header-container'>
        <div className='link-header' onClick={() => wander('/')}>Home</div>
        <div className='link-header' onClick={() => wander('/characters')}>Characters</div>
    </div>
  )
}

export default Header