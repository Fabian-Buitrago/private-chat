import Add from '../img/addAvatar.png'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth, storage, db } from '../firebase'
import { useState } from 'react'
import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage'
import { doc, setDoc } from 'firebase/firestore'
import { Link, useNavigate } from 'react-router-dom'

const Register = () => {
  const [previewUrl, setPreviewUrl] = useState('')
  const [err, setErr] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    const displayName = e.target[0].value
    const email = e.target[1].value
    const password = e.target[2].value
    const file = e.target[3].files[0]

    try {
      const res = await createUserWithEmailAndPassword(auth, email, password)
      const fileName = `${res?.user?.uid}-${displayName}`
      const storageRef = ref(storage, fileName)

      const uploadTask = uploadBytesResumable(storageRef, file)

      uploadTask.on('state_changed',
        (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused')
              break
            case 'running':
              console.log('Upload is running')
              break
          }
        },
        (error) => {
          console.log(error.code)
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then(async (photoURL) => {
            await updateProfile(res.user, { displayName, photoURL })
            await setDoc(doc(db, 'users', res.user.uid), {
              uid: res.user.uid,
              displayName,
              email,
              photoURL
            })

            await setDoc(doc(db, 'userChats', res.user.uid), {})
            navigate('/')
          })
        }
      )
    } catch (error) {
      console.log(error)
      setErr(true)
    }
  }

  return (
    <div className='formContainer'>
      <div className='formWrapper'>
        <span className='logo'>Private Chat</span>
        <span className='title'>Register</span>
        <form onSubmit={handleSubmit}>
          <input type='text' placeholder='display name' />
          <input type='email' placeholder='email' />
          <input type='password' placeholder='password' />
          <input
            type='file' id='file' style={{ display: 'none' }} onChange={(e) => {
              const file = e.target.files?.[0]

              if (file) {
                setPreviewUrl(URL.createObjectURL(file))
              }
            }}
          />
          <label htmlFor='file'>
            {previewUrl
              ? (
                <img src={previewUrl} />
                )
              : <img src={Add} />}
            <span>Add an avatar</span>
          </label>
          <button>Sign up</button>
          {err && <span>Something went wrong</span>}
        </form>
        <p>Do you have an account? <Link to='/login'>Login</Link></p>
      </div>
    </div>
  )
}

export default Register
