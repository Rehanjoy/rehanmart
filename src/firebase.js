

import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyDygoH9EABcEnLZfVpmS-OqotuLFqZtTjI",
  authDomain: "maltimart-b3ea5.firebaseapp.com",
  projectId: "maltimart-b3ea5",
  storageBucket: "maltimart-b3ea5.appspot.com",
  messagingSenderId: "714183232043",
  appId: "1:714183232043:web:d1c8dda5395ae27732386e"
};



export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export const storage = getStorage(app) 

export default app