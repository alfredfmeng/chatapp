import React, { useEffect, useRef, useState } from 'react';
import './App.css';
import SignOut from './Components/SignOut';
import SignIn from './Components/SignIn';
import ChatRoom from './Components/ChatRoom';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: 'AIzaSyBon4Yj5A2ixasH_7hRbiyqG4uFTbFGQj0',
  authDomain: 'chatapp-e11ed.firebaseapp.com',
  projectId: 'chatapp-e11ed',
  storageBucket: 'chatapp-e11ed.appspot.com',
  messagingSenderId: '806935058819',
  appId: '1:806935058819:web:ed683aff7d8b7219b3beb6',
  measurementId: 'G-TL59J25W23',
});

export const auth = firebase.auth();
export const firestore = firebase.firestore();

function App() {
  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut />
      </header>

      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
