import { useState } from "react";
import fakeUser from "../data/fakeuser";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email === fakeUser.email && password === fakeUser.password) {
      localStorage.setItem("isloggedin", "true");
      navigate("/dashboard");
    } else {
      setError("Invalid email or password ❌");
    }
  };

  return (
    <div className="flex justify-center items-center h-[100dvh] bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-sm animate-fade-in"
      >
        <h2 className="text-center text-3xl font-bold text-indigo-600 mb-6 uppercase tracking-wider">
          Login
        </h2>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <div className="mb-5">
          <label className="font-semibold block mb-1">Email:</label>
          <input
            type="text"
            placeholder="Enter Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <div className="mb-6">
          <label className="font-semibold block mb-1">Password:</label>
          <input
            type="password"
            placeholder="Enter Your Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-indigo-600 hover:bg-indigo-700 transition-all text-white py-2 rounded-lg font-semibold"
        >
          Login
        </button>

        {/* Optional: Login instructions */}
        <ul className="list-disc pl-5 mt-6 text-sm text-gray-600 space-y-1">
          <li>Use the correct email and password</li>
          <li>Details must match our records</li>
        </ul>
      </form>
    </div>
  );
};

export default Login;
