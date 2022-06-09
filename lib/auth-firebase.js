import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export const auth = getAuth();

export function loginUser(email, password) {
    return signInWithEmailAndPassword(auth, email, password).then(
      (userCredential) => {
        const user = userCredential.user;
        return user;
      }
    );
  };