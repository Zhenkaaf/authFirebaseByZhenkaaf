import { NavLink } from "react-router-dom";
import { useDispatch } from 'react-redux';
import { setUserActionCreator } from "../../redux/AuthReducer";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import Form from './../Form/Form';
import { useNavigate } from 'react-router-dom';


const LoginPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleLogin = (email, password) => {
        /* dispatch(setUserActionCreator()); */
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            /*  .then(console.log) */
            .then(({ user }) => {
                console.log(user);
                dispatch(setUserActionCreator(user.email, user.accessToken, user.uid));
                /* dispatch(setUserActionCreator({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                })); */
                navigate('/');
            })
            .catch((error) => {
                alert('Invalid user. Please go to the registration page');
                /* const errorCode = error.code;
                const errorMessage = error.message; */
            });
    }

    return (
        <div>
            <h1>this is LoginPage</h1>
            <Form title={'login'} handleFn={handleLogin} />
            <div>If you have not an account, go to <NavLink to='/register'>register</NavLink></div>
        </div>
    )
}
export default LoginPage;