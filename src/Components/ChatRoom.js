import React, { useEffect, useRef, useState } from 'react';
import { firestore } from '../App';
import firebase from 'firebase/app';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import { auth } from '../App';
import ChatMessage from './ChatMessage';

function ChatRoom() {
  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limitToLast(25);

  const [messages] = useCollectionData(query, { idField: 'id' });

  const [formValue, setFormValue] = useState('');

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL,
    });
    setFormValue('');
  };

  const dummy = useRef();

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <main>
      <div>
        {messages &&
          messages.map((msg) => {
            return <ChatMessage key={msg.id} message={msg} />;
          })}
        <span ref={dummy}></span>
      </div>
      <form onSubmit={sendMessage}>
        <input
          value={formValue}
          onChange={(e) => setFormValue(e.target.value)}
          placeholder="Write a message"
        />
        <button type="submit" disabled={!formValue}>
          🕊️
        </button>
      </form>
    </main>
  );
}

export default ChatRoom;
