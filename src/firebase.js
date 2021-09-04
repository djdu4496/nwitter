import firebase from 'firebase/compat/app' // 'firebase/app'에 포함된 모든 모듈을 firebase라는 객체에 부여한다

const firebaseConfig = {
    apiKey: "AIzaSyAaam3U_K1r9TnXgeGzU16cwD1cNajVeOU",
    authDomain: "nwitter-ae96f.firebaseapp.com",
    projectId: "nwitter-ae96f",
    storageBucket: "nwitter-ae96f.appspot.com",
    messagingSenderId: "625009522851",
    appId: "1:625009522851:web:0128e0aaf18c29539e6716"
  };


export default firebase.initializeApp(firebaseConfig); 
// firebase.initializeApp === initializeApp 함수를 firebase 객체에서 꺼내 사용한다