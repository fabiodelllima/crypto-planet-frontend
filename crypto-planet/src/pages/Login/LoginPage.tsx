import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    if (!email.includes("@") || email.length < 5) {
      setError("Insira um email válido.");
      return;
    }

    if (password.length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }

    navigate("/portfolio");
  };

  return (
    <div className="min-h-screen bg-container flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-black rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Login to Crypto Planet
        </h1>
        <form className="space-y-6" onSubmit={handleLogin}>
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <Button styleType="primary" className="w-full">
            Login
          </Button>
        </form>
        <div className="mt-6 text-center text-greyPrimary">
          <p>
            Forgot your password?{" "}
            <a href="#" className="text-bluePrimary hover:underline">
              Reset here
            </a>
          </p>
          <p>
            Don't have an account?{" "}
            <a href="#" className="text-bluePrimary hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
