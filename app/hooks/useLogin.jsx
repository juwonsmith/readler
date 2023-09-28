import { useState } from "react";
import { auth } from "../firebase/Config";
import { signInWithEmailAndPassword } from "firebase/auth";
import useAuthStore from "../store/store";
import { useEffect } from "react";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscancelled, setisCancelled] = useState(false);
  const loginfunc = useAuthStore((state) => state.login);

  const login = async (email, password) => {
    setIspending(true);
    setError(null);
    try {
      const res = await signInWithEmailAndPassword(auth, email, password);
      loginfunc(res.user);

      if (iscancelled) {
        setIspending(false);
        setError(null);
      }
    } catch (err) {
      if (iscancelled) {
        setIspending(false);
        setError("wrong details");
      }
    }
  };
  useEffect(() => {
    return () => setisCancelled(true);
  }, []);

  return { error, ispending, login };
};
