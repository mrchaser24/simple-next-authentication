import firebase_app from "../config";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const auth = getAuth(firebase_app);
const signUp = async (email: string, password: string) => {
    let res = null, err = null
    try {
        res = await createUserWithEmailAndPassword(auth, email, password)
    } catch (e) {
        err = e
    }
    return { res, err }
}

export default signUp 