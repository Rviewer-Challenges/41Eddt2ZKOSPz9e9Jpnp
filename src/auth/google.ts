import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

interface Usuario {
  uid: string;
  email: string;
  avatar: string;
  displayName: string;
}

export async function signInWithGoogle (): Promise<Usuario | undefined> {
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  
  let user
  try {
    const result = await signInWithPopup(auth, provider);
    user = result.user;
  } catch (error) {
    console.log(error);
  }
  
  if(user) {
    return {
      uid: user.uid,
      email: user.email as string,
      avatar: user.photoURL as string,
      displayName: user.displayName as string
    };
  } else {
    return undefined;
  }
} 


