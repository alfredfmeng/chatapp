import { auth } from '../App';

function SignOut() {
  return (
    auth.currentUser && (
      <button id="signOutButton" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default SignOut;
