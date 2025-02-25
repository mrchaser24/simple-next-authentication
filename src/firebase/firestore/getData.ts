import firebase_app from "../config";
import { getFirestore, doc, getDoc } from "firebase/firestore";

const db = getFirestore(firebase_app);

export default async function getDocument(collection: string, id: string) {
    let docRef = doc(db, collection, id);
    let res = null, err = null;

    try {
        res = await getDoc(docRef);
    } catch (e) {
        err = e;
    }

    return { res, err };
}