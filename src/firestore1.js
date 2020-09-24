
  import firebase from 'firebase';

  const firebaseApp = firebase.initializeApp({
    
    
      apiKey: "AIzaSyAoJaSNWjL8oOfBCgqDcpPDLVUPvfiRZII",
      authDomain: "taskpro-ajay.firebaseapp.com",
      databaseURL: "https://taskpro-ajay.firebaseio.com",
      projectId: "taskpro-ajay",
      storageBucket: "taskpro-ajay.appspot.com",
      messagingSenderId: "115707102020",
      appId: "1:115707102020:web:23b33ff5c770438fd5cd11",
      measurementId: "G-L4NP8XSFRV"
  

  });

  const db = firebaseApp.firestore();

  export default db;