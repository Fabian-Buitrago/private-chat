import { signOut } from 'firebase/auth'
import { useContext } from 'react'
import { auth } from '../../firebase'
import { AuthContext } from '../../context/AuthContext'
import './Navbar.scss'

const Navbar = () => {
  const { currentUser } = useContext(AuthContext)
  return (
    <div className='navbar'>
      <span className='logo'>Private Chat</span>
      <div className='user'>
        <img
          src={currentUser.photoURL}
        />
        <span>{currentUser.displayName}</span>
        <button onClick={() => signOut(auth)}>logout</button>
      </div>
    </div>
  )
}

export default Navbar
