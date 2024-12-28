import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await login(email, password);
    } catch (error) {
      setError(error instanceof Error ? error.message : "Failed to login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold text-white mb-6">Login</h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
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
        <Button
          styleType="primary"
          type="submit"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Logging in..." : "Login"}
        </Button>
      </form>
      <div className="flex flex-col mt-6 text-center text-greyPrimary">
        <span>Don't have an account?</span>
        <Link to="/register" className="text-bluePrimary hover:underline">
          Register here
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
