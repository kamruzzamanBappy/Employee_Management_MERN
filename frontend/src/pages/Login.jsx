const Login = () => {
  return (
    <div className="flex flex-col items-center h-screen justify-center bg-gradient-to-b from-slate-600 from-50% to-gray-100 to-50% space-y-6">
      <h2 className="text-3xl text-black">Employee Mangement System</h2>

      <div className="border shadow p-6 w-80 bg-white">
        <h2 className="text-2xl font-bold b-4">Login</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-800">
              Email
            </label>
            <input
              type="email"
              className=" w-full px-3 py-2 border"
              placeholder="Enter Email"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password">Password</label>
            <input
              type="pssword"
              placeholder=""
              className="w-full px-3 border"
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
