import firebase from 'firebase';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
    apiKey: "AIzaSyCeLhH-nygYvdy7WI0mdqBcVFLNGIlQSu0",
    authDomain: "clone-a8fcc.firebaseapp.com",
    projectId: "clone-a8fcc",
    storageBucket: "clone-a8fcc.appspot.com",
    messagingSenderId: "106275750171",
    appId: "1:106275750171:web:9a4f9665db8ae36693d3be",
    measurementId: "G-QRTR8DEV77"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  
  const deb = firebaseApp.firestore();
  const auth = firebase.auth();

  export { deb, auth };