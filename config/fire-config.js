const firebase = require('firebase/app')
// Required for side-effects
require('firebase/firestore')
require('firebase/database')

const firebaseConfig = {
  apiKey: 'AIzaSyA8k9CAAs_rOyZGo9lmMbBbGVtmdVlCZmA',
  authDomain: 'botchatlaw.firebaseapp.com',
  databaseURL: 'https://botchatlaw.firebaseio.com/',
  projectId: 'botchatlaw',
  storageBucket: 'nam5 (us-central).appspot.com',
  messagingSenderId: '391620364560',
  appId: '391620364560'
}
try {
  firebase.initializeApp(firebaseConfig)
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error('Firebase initialization error', err.stack)
  }
}

export default firebase
