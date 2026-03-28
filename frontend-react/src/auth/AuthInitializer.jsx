import { useEffect } from "react";
import { useDispatch } from "react-redux";
import axios from "axios";
import { loginSuccess, logout, setLoading } from "../redux/authSlice";
import { API_BASE_URL } from "../utils/constants";

// const API_BASE_URL = "http://localhost:5000";

const AuthInitializer = ({ children }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const { data } = await axios.post(
          `${API_BASE_URL}/api/auth/refresh-token`,
          {},
          { withCredentials: true }
        );

        dispatch(loginSuccess(data));
      } catch (error) {
        console.log(error.response);
        
        dispatch(logout());
      } finally {
        dispatch(setLoading(false));
      }
    };

    initializeAuth();
  }, [dispatch]);

  return children;
};

export default AuthInitializer;