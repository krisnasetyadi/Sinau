import firebase from 'firebase';
import 'firebase/storage';

const firebaseConfig = ({
  apiKey: process.env.NEXT_PUBLIC_frb_key,
  authDomain: process.env.NEXT_PUBLIC_frb_authDomain,
  projectId: process.env.NEXT_PUBLIC_frb_projectId,
  storageBucket: process.env.NEXT_PUBLIC_frb_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_frb_messaginSenderId,
  appId: process.env.NEXT_PUBLIC_frb_appId,
  measurementId: process.env.NEXT_PUBLIC_frb_measurementId,
  databaseURL:process.env.NEXT_PUBLIC_frb_ReltimeDB
});
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}
export default firebase;
