import { useState } from "react";

//firebase imports
import { auth } from "../firebase/Config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import useAuthStore from "../store/store";
import { useEffect } from "react";
import { updateProfile } from "firebase/auth";
export const useSignUp = () => {
  const [error, setError] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscancelled, setisCancelled] = useState(false);
  const login = useAuthStore((state) => state.login);

  const signup = async (email, password, username) => {
    setError(null);
    setIspending(true);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);

      if (!res) {
        throw new Error("Could not complete signup");
      }
      await updateProfile(res.user, { displayName: username });

      //dispatch login action
      login(res.user);

      if (iscancelled) {
        setError(null);
        setIspending(false);
      }
    } catch (err) {
      if (iscancelled) {
        console.log(err.message);
        setError(err.message);
        setIspending(false);
      }
    }
  };
  useEffect(() => {
    return () => setisCancelled(true);
  });
  return { signup, error, ispending };
};
