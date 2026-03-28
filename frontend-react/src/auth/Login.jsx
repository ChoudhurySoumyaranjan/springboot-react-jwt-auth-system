import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginUser } from "../api/service/authService";
import { loginSuccess } from "../redux/authSlice";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleOnChange = (e) => {
    setUserCredentials({
      ...userCredentials,
      [e.target.name]: e.target.value,
    });
    if (errorMsg) setErrorMsg(""); 
  };

  const handleOnSubmit = async (e) => {
    e.preventDefault();
    setErrorMsg("");
    setIsLoading(true);

    try {
      const response = await loginUser(userCredentials);
      dispatch(loginSuccess(response.data));
      navigate("/profile");
    } catch (error) {
      const msg =
        error?.response?.data?.message ||
        error?.response?.data?.error ||
        "Invalid credentials. Please try again.";
      setErrorMsg(msg);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-4">
      <div className="w-full max-w-md">
        {/* Card */}
        <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
          {/* Header */}
          <div className="px-8 pt-10 pb-6 text-center">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Welcome back
            </h1>
            <p className="mt-2 text-gray-600 text-sm">
              Sign in to continue to your account
            </p>
          </div>

          <form onSubmit={handleOnSubmit} className="px-8 pb-10 space-y-6">
            
            {errorMsg && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-xl text-sm">
                {errorMsg}
              </div>
            )}

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={userCredentials.email}
                onChange={handleOnChange}
                className="block w-full px-4 py-3 rounded-xl border border-gray-300 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                         outline-none transition-all duration-200 
                         placeholder:text-gray-400 bg-white/70"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1.5"
              >
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                value={userCredentials.password}
                onChange={handleOnChange}
                className="block w-full px-4 py-3 rounded-xl border border-gray-300 
                         focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 
                         outline-none transition-all duration-200 
                         placeholder:text-gray-400 bg-white/70"
                placeholder="••••••••••"
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`
                relative w-full py-3.5 px-4 rounded-xl font-semibold text-white
                transition-all duration-300 shadow-lg
                ${
                  isLoading
                    ? "bg-indigo-400 cursor-not-allowed"
                    : "bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 hover:shadow-xl hover:-translate-y-0.5 active:translate-y-0"
                }
              `}
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <svg
                    className="animate-spin h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                    />
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign in"
              )}
            </button>
          </form>
        </div>

        <p className="mt-6 text-center text-sm text-indigo-100/80">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="font-medium underline hover:text-white"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;