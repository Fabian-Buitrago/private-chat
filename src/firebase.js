import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// const firebaseConfig = {
//   apiKey: process.dev.REACT_APP_API_KEY,
//   authDomain: process.dev.REACT_APP_AUTH_DOMAIN,
//   projectId: process.dev.REACT_APP_PROJECT_ID,
//   storageBucket: process.dev.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.dev.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.dev.REACT_APP_API_ID
// }

const firebaseConfig = {
  apiKey: 'AIzaSyCnxPO8ldLgV5G2eLqh80AxHrgAFaA9PEw',
  authDomain: 'chat-824f3.firebaseapp.com',
  projectId: 'chat-824f3',
  storageBucket: 'chat-824f3.appspot.com',
  messagingSenderId: '328883950866',
  appId: '1:328883950866:web:1dd6c3e4511e060c668fcb'
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
