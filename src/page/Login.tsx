import { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext.tsx";
import { Link, useNavigate } from "react-router";
import logo1 from '../assets/logo/log1.png';


export const Login: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const { login } = useAuth(); 
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();


  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  
    try {
      setError("");
      setLoading(true);
  
      if (emailRef.current && passwordRef.current) {
        await login(emailRef.current.value, passwordRef.current.value);
        navigate('/');
        console.log("Login successful");
      }
    } catch (error: any) {
      if (error.code === "auth/wrong-password") {
        setError("Password is wrong");
      } else if (error.code === "User not found") {
        setError("User not found");
      } else {
        setError("Error");
      }
    }
    
  }
  

  return (
    <div className="flex flex-col items-start  justify-center min-h-screen bg-[url('https://images.alphacoders.com/697/697322.jpg')] object-contain">
       <button
        onClick={() => navigate('/')}
        className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-300 transition"
      >
        X
      </button>
          <form onSubmit={handleSubmit} className="border-2 border-gray-400  hover:border-2 hover:border-[#fade4b] p-8 m-8 rounded-lg shadow-md w-[580px] h-[570px] relative left-[15%]">
          <img src={logo1} alt="Star Wars Logo Center" className="w-[25%] h-auto mb-1 ml-[38%]"/>
          <h1 className="text-white text-center text-2xl bg-transparent mb-6">Login</h1>
      {error && (
        <div className="bg-red-100 text-red-700 p-2 rounded mb-4">
          {error}
        </div>
      )}

      <input
        type="email"
        placeholder="Email"
        ref={emailRef}
        className="border w-full p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />
      <input
        type="password"
        placeholder="Password"
        ref={passwordRef}
        className="border w-full p-2 rounded mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
        required
      />

      <button
        disabled={loading}
        type="submit"
        className={`bg-[#fade4b] text-black py-2 px-4 rounded w-full transition ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-grey-600"
        }`}
      >
        {loading ? "Loading..." : "Log In"}
      </button>
      <h1 className="text-white text-center mt-10"> Need an account? <br/><Link to='/signup'><strong className="animate-pulse">Sign Up</strong></Link></h1>
    </form>
   </div>
  );
};
