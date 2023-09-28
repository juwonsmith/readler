import { useState, useEffect } from "react";
import { useFireStores } from "../store/store";
import { collection, addDoc, doc, updateDoc } from "firebase/firestore";
import { deleteDoc } from "firebase/firestore";
// import { timestamp } from "../Firebase/Config";
import { Timestamp } from "firebase/firestore";
import { db } from "../firebase/Config";

export const useFireStore = (colle) => {
  const [iscancelled, setIscancelled] = useState(false);
  const isPenddispatch = useFireStores((state) => state.isPendingdispatch);
  const adddocdispatch = useFireStores((state) => state.AddedDoc);
  const Errordispatch = useFireStores((state) => state.Error);
  const updatedDocDispatch = useFireStores((state) => state.updatedDoc);
  const DeletedDocDispatch = useFireStores((state) => state.DeletedDoc);

  const ref = collection(db, colle);

  //add document

  const addbook = async (doc) => {
    isPenddispatch();
    try {
      const createdAt = Timestamp.fromDate(new Date());
      const addeddoc = await addDoc(ref, { ...doc, createdAt });
      if (iscancelled) {
        adddocdispatch(addeddoc);
      }
    } catch (err) {
      if (iscancelled) {
        Errordispatch(err);
      }
    }
  };

  //delete document

  const deletedocument = async (id) => {
    isPenddispatch();
    try {
      const docref = doc(ref, id);
      await deleteDoc(docref);
      DeletedDocDispatch();
    } catch (err) {
      if (iscancelled) {
        Errordispatch("could not delete");
      }
    }
  };

  const updateCompletedStatus = async (id, cond) => {
    isPenddispatch();
    try {
      const aref = doc(ref, id);
      await updateDoc(aref, { completed: cond });
      updatedDocDispatch();
    } catch (err) {
      if (iscancelled) {
        Errordispatch("could not update");
      }
    }
  };

  const updatelessonlearnt = async (id, data) => {
    isPenddispatch();
    try {
      const aref = doc(ref, id);
      await updateDoc(aref, { lessonslearnt: data });
      updatedDocDispatch();
    } catch (err) {
      if (iscancelled) {
        Errordispatch("could not update");
      }
    }
  };
  useEffect(() => {
    return () => setIscancelled(true);
  }, []);

  return { addbook, deletedocument, updateCompletedStatus, updatelessonlearnt };
};
