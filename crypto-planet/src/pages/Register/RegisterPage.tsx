import { useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link } from "react-router-dom";

import Button from "../../components/common/Button";
import Input from "../../components/common/Input";

const RegisterPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { register } = useAuth();

  const validateForm = () => {
    if (!formData.name.trim()) {
      throw new Error("Name is required");
    }
    if (formData.name.trim().length < 3) {
      throw new Error("Name must be at least 3 characters");
    }
    if (!formData.email.includes("@")) {
      throw new Error("Invalid email address");
    }
    if (formData.password.length < 6) {
      throw new Error("Password must be at least 6 characters");
    }
    if (formData.password !== formData.confirmPassword) {
      throw new Error("Passwords don't match");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      validateForm();
      await register({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Registration failed";
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="bg-black rounded-lg shadow-lg p-8">
      <h1 className="text-2xl font-bold text-white mb-6">
        Create Your Account
      </h1>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <Input
          id="name"
          name="name"
          type="text"
          label="Name"
          placeholder="Enter your name"
          value={formData.name}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
        <Input
          id="email"
          name="email"
          type="email"
          label="Email"
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
        <Input
          id="password"
          name="password"
          type="password"
          label="Password"
          placeholder="Enter your password"
          value={formData.password}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
        <Input
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          label="Confirm Password"
          placeholder="Confirm your password"
          value={formData.confirmPassword}
          onChange={handleChange}
          disabled={isLoading}
          required
        />
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button
          styleType="primary"
          type="submit"
          disabled={isLoading}
          className="w-full"
        >
          {isLoading ? "Creating account..." : "Register"}
        </Button>
      </form>
      <div className="flex flex-col mt-6 text-center text-greyPrimary">
        <span>Already have an account? </span>
        <Link to="/login" className="text-bluePrimary hover:underline">
          Login here
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
