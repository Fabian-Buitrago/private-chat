import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.dev.REACT_APP_API_KEY,
  authDomain: process.dev.REACT_APP_AUTH_DOMAIN,
  projectId: process.dev.REACT_APP_PROJECT_ID,
  storageBucket: process.dev.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.dev.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.dev.REACT_APP_API_ID
}

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
