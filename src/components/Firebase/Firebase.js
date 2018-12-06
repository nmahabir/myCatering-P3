import * as firebase from "firebase";
import "firebase/auth";
import "firebase/storage";

// const config = {
//   apiKey: process.env.REACT_APP_Firebase_apiKey,
//   authDomain: process.env.REACT_APP_Firebase_authDomain,
//   databaseURL: process.env.REACT_APP_Firebase_databaseURL,
//   projectId: process.env.REACT_APP_Firebase_projectId,
//   storageBucket: process.env.REACT_APP_Firebase_storageBucket,
//   messagingSenderId: process.env.REACT_APP_Firebase_messagingSenderId
// };

const config = {
  apiKey: "AIzaSyA7K4T1unj7T__LV2Wre0Mf7ATr-i6Fwio",
  authDomain: "mycatering-72769.firebaseapp.com",
  databaseURL: "https://mycatering-72769.firebaseio.com",
  projectId: "mycatering-72769",
  storageBucket: "mycatering-72769.appspot.com",
  messagingSenderId: "629324535342"
};
firebase.initializeApp(config);

const storage = firebase.storage()

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth = firebase.auth();
  }
  // *** Auth API ***

  doCreateUserWithEmailAndPassword = (email, password) =>
    this.auth.createUserWithEmailAndPassword(email, password);

  doSignInWithEmailAndPassword = (email, password) =>
    this.auth.signInWithEmailAndPassword(email, password);

  doSignOut = () => this.auth.signOut();

  doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

  doPasswordUpdate = password => this.auth.currentUser.updatePassword(password);
}

export {Firebase, storage as default}
