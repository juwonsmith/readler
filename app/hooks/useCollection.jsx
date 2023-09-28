import { useState, useEffect, useRef } from "react";
import { db } from "../firebase/Config";

//firebase imports
import {
  collection,
  onSnapshot,
  where,
  query,
  orderBy,
} from "firebase/firestore";

export const useCollection = (col, _query, _query3, _orderBy) => {
  const [documents, setDocuments] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIspending] = useState(false);
  const query2 = useRef(_query).current;
  const query3 = useRef(_query3).current;
  const order_By = useRef(_orderBy).current;

  useEffect(() => {
    setIspending(true);
    const ref = query(
      collection(db, col),
      where(...query2),
      where(...query3),
      orderBy(...order_By)
    );
    const unsubscribe = onSnapshot(
      ref,
      (snapshot) => {
        let results = [];
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id });
        });
        //update state

        setDocuments(results);
        setError(null);
        setIspending(false);
      },
      (err) => {
        console.log(err);
        setError("could not fetch data");
        setIspending(false);
      }
    );

    return () => unsubscribe();
  }, [col, query2, order_By, query3]);
  return { documents, error, isPending };
};

// export const useCollection = (col, _query) => {
//   const [documents, setDocuments] = useState(null);
//   const [error, setError] = useState(null);
//   const [isPending, setIspending] = useState(false);
//   const query2 = useRef(_query).current;

//   useEffect(() => {
//     setIspending(true);
//     // let ref = collection(db, col);

//     const ref = query(collection(db, col), where(...query2));

//     const unsub = onSnapshot(ref, (Snapshot) => {
//       let results = [];
//       Snapshot.docs?.forEach((doc) => {
//         results.push({ ...doc.data(), id: doc.id });
//       });
//       setDocuments(results);
//     });

//     return () => unsub();
//   }, [col]);
//   return { documents, query };
// };
