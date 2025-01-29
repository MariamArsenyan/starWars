import { useState } from "react";
import { useAuth } from "../contexts/AuthContext.tsx";
import { useNavigate } from "react-router";
import logo1 from "../assets/logo/log1.png";

export const SignUp: React.FC = () => {
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "", confirm: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.password !== form.confirm) return setError("Passwords do not match");

    try {
      setError("");
      setLoading(true);
      await signup(form.email, form.password);
      navigate("/");
    } catch {
      setError("Failed to create an account");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col justify-center min-h-screen bg-[url('https://images.alphacoders.com/697/697322.jpg')]">
      <button onClick={() => navigate("/")} className="absolute top-5 right-5 w-9 h-9 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-300">X</button>

      <form onSubmit={handleSubmit} className="border-2 border-gray-400 hover:border-[#fade4b] p-8 m-8 rounded-lg shadow-md w-[580px] h-[570px] mx-auto">
        <img src={logo1} alt="Star Wars Logo" className="w-1/4 mx-auto mb-4"/>
        <h1 className="text-white text-center text-2xl mb-4">Create your account</h1>

        {error && <div className="bg-red-100 text-red-700 p-2 rounded mb-4">{error}</div>}

        {(["email", "password", "confirm"] as const).map((field) => (
          <input
            key={field}
            type={field === "email" ? "email" : "password"}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            className="border w-full p-2 rounded mb-4 focus:ring-2"
          />
        ))}
        <button disabled={loading} className={`bg-[#fade4b] text-black py-2 px-4 rounded w-full transition ${loading ? "opacity-50 cursor-not-allowed" : "hover:bg-gray-600"}`}>
          {loading ? "Signing up..." : "Sign Up"}
        </button>
      </form>
    </div>
  );
};
