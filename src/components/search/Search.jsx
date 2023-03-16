import { useContext, useState } from 'react'
import {
  collection,
  doc,
  getDoc,
  query,
  serverTimestamp,
  setDoc,
  updateDoc,
  where
} from 'firebase/firestore'
import { db } from '../../firebase'
import { AuthContext } from '../../context/AuthContext'

import './Search.scss'

const Search = () => {
  const [username, setUsername] = useState('')
  const [user, setUser] = useState(null)
  const [err, setErr] = useState(false)

  const { currentUser } = useContext(AuthContext)

  const handleSearch = async (e) => {
    const q = query(
      collection(db, 'users'),
      where('displayName', '==', username)
    )
    try {
      const querySnapshot = await getDoc(q)
      querySnapshot.forEach((doc) => {
        setUser(doc.data())
      })
    } catch (error) {
      setErr(true)
    }
  }

  const handleKey = (e) => {
    e.code === 'Enter' && handleSearch()
  }

  const handleSelect = async (e) => {
    // check whether the group(chats in firestore) exists, if not create
    const combinedId =
      currentUser.uid > user.uid
        ? currentUser.uid + user.uid
        : user.uid + currentUser.uid
    try {
      const res = await getDoc(doc(db, 'chats', combinedId))

      if (!res.exists()) {
        // create a chat in chats collection
        await setDoc(doc(db, 'chats', combinedId), { messages: [] })

        // create user chats
        await updateDoc(doc(db, 'userChats', user.uid), {
          [combinedId + '.userInfo']: {
            uid: currentUser.uid,
            displayName: currentUser.displayName,
            photo: currentUser.photoURL
          },
          [combinedId + '.date']: serverTimestamp()
        })
      }
    } catch (error) {}

    setUser(null)
    setUsername('')
  }

  return (
    <div className='search'>
      <div className='searchForm'>
        <input
          type='text'
          placeholder='Find a user'
          onKeyDown={handleKey}
          onChange={(e) => setUsername(e.target.value)}
          value={username}
        />
      </div>
      {err && <span>User not found!</span>}
      {user && (
        <div className='userChat' onClick={handleSelect}>
          <img src={user.photoURL} />
          <div className='userChatInfo'>
            <span>{user.displayName}</span>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
