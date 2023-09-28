import { auth } from "../firebase/Config";
import { signOut } from "firebase/auth";
import useAuthStore from "../store/store";
import { useState, useEffect } from "react";

export const useLogout = () => {
  const [error, setError] = useState(null);
  const [ispending, setIspending] = useState(false);
  const [iscancelled, setisCancelled] = useState(false);
  const Logoutfunc = useAuthStore((state) => state.Logout);

  const logout = async () => {
    setIspending(true);
    setError(null);

    try {
      await signOut(auth);
      Logoutfunc();
      if (iscancelled) {
        setError(null);
        setIspending(true);
      }
    } catch (err) {
      if (iscancelled) {
        setError(err.message);
        setIspending(true);
        console.log(err.message);
      }
    }
  };
  useEffect(() => {
    return () => setisCancelled(true);
  });
  return { logout, error, ispending };
};
