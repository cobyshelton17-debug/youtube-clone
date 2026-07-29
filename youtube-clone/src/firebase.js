import { initializeApp } from 'firebase/app'
import { getAuth, GoogleAuthProvider } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyBp6KUNf376_NyQV-5HWCCG3QjLhWfkrWM",
  authDomain: "clone-16b83.firebaseapp.com",
  projectId: "clone-16b83",
  storageBucket: "clone-16b83.firebasestorage.app",
  messagingSenderId: "790192878612",
  appId: "1:790192878612:web:3f7dcef902cd3c2f06a301",
  measurementId: "G-EX4R238MZ8"
}

const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
