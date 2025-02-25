import firebase_app from "../config";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebase_app);
const signIn = async (email: string, password: string) => {
    let res = null, err = null
    try {
        res = await signInWithEmailAndPassword(auth, email, password)
    } catch (e) {
        err = e
    }
    return { res, err }
}

export default signIn