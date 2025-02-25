import firebase_app from "../config";
import { getFirestore, doc, setDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);
export default async function addData(collection: string, data: any, id: any) {
  let res = null, err = null

  try {
    res = await setDoc(doc(db, collection, id), data, {
      merge: true
    });
    console.log("Document written with ID: ", res);
    
  } catch (e) {
    err = e
  }

  return { res, err }
}