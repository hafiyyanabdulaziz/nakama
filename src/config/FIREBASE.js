import firebase from 'firebase'

firebase.initializeApp({
    apiKey: "AIzaSyAQYa4gK-N28IAOh_brTt8iBb6DtUiSXBo",
    authDomain: "nakama-telkomdti.firebaseapp.com",
    databaseURL: "https://nakama-telkomdti.firebaseio.com",
    projectId: "nakama-telkomdti",
    storageBucket: "nakama-telkomdti.appspot.com",
    messagingSenderId: "743083207397",
    appId: "1:743083207397:web:7083c3aed8cda9dbda820c"
})

const FIREBASE = firebase;

export default FIREBASE;