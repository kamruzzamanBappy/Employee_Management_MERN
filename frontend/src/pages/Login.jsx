import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const { login } = useAuth();
  //access login

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    //it will prevent default submission
    //api call

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/login",
        { email, password } //pass data
      );
      //store error in this variable

      if (response.data.success) {
        //alert("Successfully login");// if suceesfully login what should we need to do => store cookies
        login(response.data.user);
        localStorage.setItem("token", response.data.token);

        if (response.data.user.role === "admin") {
          navigate("/admin-dashboard");
        } else {
          navigate("employee-dashboard");
        }
      }

      //console.log(response);
      //go to server side and need to access data from this route, verify thne data
    } catch (error) {
      //console.log(error.response ? error.response.data : error);
      //console.log(error);

      if (error.response && !error.response.data.success) {
        setError(error.response.data.error);
      } else {
        setError("Server Error");
      }
    }
  };

  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-slate-600 from-50% to-gray-100 to-50% space-y-6">
      <h2 className="text-3xl text-black">Employee Mangement System</h2>

      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold b-4">Login</h2>
        {error && <p className="text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800">
              Email
            </label>
            <input
              type="email"
              className=" w-full px-3 py-2 border"
              placeholder="Enter Email"
              onChange={(e) => setEmail(e.target.value)}
              required //fill up the frm
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-800">
              Password
            </label>
            <input
              type="pssword"
              placeholder=""
              className="w-full px-3 py-2 border"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-4 flex items-center justify-between">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />

              <span className="ml-2 text-gray-800">Remember me</span>
            </label>
            <a href="#" className="text-teal-600">
              Forget password?
            </a>
          </div>

          <div className="mb-4">
            <button
              type="submit"
              className="w-full bg-teal-600 text-white py-2"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
