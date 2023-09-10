import { initializeApp, getApps } from "firebase/app";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import { useState } from "react";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
  appId:  process.env.NEXT_PUBLIC_APPID,
};
// let app;
// if (!getApps().length) {
//   app = initializeApp(firebaseConfig);
// } else {
//   app = getApps()[0];
// }

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export function useAuth() {
  return auth;
}

export function useUser() {
  const [user, setUser] = useState<User>();
  onAuthStateChanged(auth, (user) => {
    if (user) setUser(user);
  });
  return user;
}
