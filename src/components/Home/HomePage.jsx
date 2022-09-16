import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/use-auth";
import { useDispatch } from "react-redux";
import { delUserActionCreator } from "../../redux/AuthReducer";



const HomePage = () => {
    const dispatch = useDispatch();
    const { isAuth, email } = useAuth();

    return (
        isAuth ? (
            <div>
                <h1>This is HomePage!!! You are welcome!!</h1>
                <button onClick={() => { dispatch(delUserActionCreator()) }}>exit</button>
                <div>ваша почта: {email}</div>
            </div>
        )

            : (
            <Navigate to='/login' />
            )

    )
}
export default HomePage;