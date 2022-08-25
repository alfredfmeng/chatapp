import firebase from 'firebase/app';
import { auth } from '../App';

function SignIn() {
  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  };

  return (
    <button id="signInButton" onClick={signInWithGoogle}>
      Sign in with Google
    </button>
  );
}

export default SignIn;
