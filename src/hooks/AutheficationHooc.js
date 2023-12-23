import { db, signInWithGooglePopup } from "../utils/Firebase";
import {addDoc, collection} from "firebase/firestore"
export const useAutheficationGooleHooc = () => {
    const GooleAuthefication = async () => {
        try {
            const response = await signInWithGooglePopup()
            // console.log(response);
            let addResponse = addDoc(collection(db, "users"),{
                name: response.user.displayName,
                photo: response.user.photoURL,
                email: response.user.email,
                token: response.user.accessToken
            })
            window.localStorage.setItem("tokenUser", response.user.accessToken)
            window.localStorage.setItem("userName", response.user.displayName)
            window.localStorage.setItem("userPhoto", response.user.photoURL)
            let tokenUser = window.localStorage.getItem("tokenUser")
            if (tokenUser) {window.location.replace("/")}
        } catch (error) {
            console.log(error);
        }
    }
    return {GooleAuthefication}
}