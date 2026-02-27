import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; // For redirecting after login

const Login = () => {
  // 1. State for form inputs
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault(); // Prevent page refresh
    setError("");

    try {
      // 2. Call your backend
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        {
          email,
          password,
        },
      );

      const { token, user } = response.data.data;

      // 3. Save token for the Middleware to find later
      localStorage.setItem("token", token);

      console.log("Logged in user:", user);

      // 4. Redirect to dashboard/home
      navigate("/admin/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.message || "Something went wrong");
      console.log(err);
    }
  };

  return (
    <div className="min-h-screen w-screen bg-gray-50 flex flex-col justify-center sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-30 w-30" src="/logo.png" alt="Logo" />
        <h2 className="text-center text-3xl font-bold tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-5 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10 border border-gray-100">
          {/* 5. Add onSubmit to the form */}
          <form className="space-y-6" onSubmit={handleLogin}>
            {error && <p className="text-red-500 text-sm">{error}</p>}

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)} // Bind state
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)} // Bind state
                className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
              />
            </div>

            {/* 6. Change div to button type="submit" */}
            <button
              type="submit"
              className="flex w-full justify-center rounded-md border bg-[#1A1C1E] border-b border-cyan-900/30 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-indigo-500">
              Sign in
            </button>
          </form>
          {/* ... rest of your UI (Google/Facebook buttons) ... */}
        </div>
      </div>
    </div>
  );
};

export default Login;
