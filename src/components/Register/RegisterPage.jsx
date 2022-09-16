import { NavLink } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import Form from "./../Form/Form";
import { setUserActionCreator } from "../../redux/AuthReducer";
import { useNavigate } from 'react-router-dom';


const RegisterPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleRegister = (email, password) => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            /* .then(console.log) */
            .then(({ user }) => {
                console.log(user.email);
                /* dispatch(setUserActionCreator({
                    email: user.email,
                    token: user.accessToken,
                    id: user.uid
                })); */
                dispatch(setUserActionCreator(user.email, user.accessToken, user.uid));
                navigate('/');
            })
            .catch((error) => {
                alert('Invalid data');
               /*  const errorCode = error.code;
                const errorMessage = error.message; */
              
            });
    }


    return (
        <div>
            <h1>This is registerPage</h1>
            <Form title='register' handleFn={handleRegister} />
            <div>or <NavLink to='/login'>login</NavLink></div>
        </div>
    )
}
export default RegisterPage;