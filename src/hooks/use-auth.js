import { useSelector } from "react-redux";

export function useAuth() {
    const {email, token, id} = useSelector(state => state.auth);
  
    
    return {
        isAuth: !!id,
        email,
        token,
        id
    }
}