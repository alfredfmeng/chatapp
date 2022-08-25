import { auth } from '../App';

function ChatMessage(props) {
  const { text, uid, photoURL } = props.message;
  const messageClass = uid === auth.currentUser.uid ? 'sent' : 'received';
  return (
    <div className={`message ${messageClass}`}>
      <img src={photoURL} alt="" />
      <p id="msg-text">{text}</p>
    </div>
  );
}

export default ChatMessage;
