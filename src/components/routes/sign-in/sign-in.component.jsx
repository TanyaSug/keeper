import { signInWithGooglePopup, creatUserDocumentFromAuth} from "../../../utils/firebase/firebase.utils";
import SignUpForm from "../../sign-up-form/sign-up-form.component";

const SignIn = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await creatUserDocumentFromAuth(user);
    };
    return (
        <div>
            <h1>Sign in</h1>
            <button onClick={logGoogleUser}>Sign in with google popup</button>
            <SignUpForm />
        </div>
    )
};

export default SignIn;