import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-container flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-black rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Login to Crypto Planet
        </h1>
        <form className="space-y-6">
          <Input
            id="email"
            type="email"
            label="Email"
            placeholder="Enter your email"
            required
          />
          <Input
            id="password"
            type="password"
            label="Password"
            placeholder="Enter your password"
            required
          />
          <Button type="submit" className="w-full">
            Login
          </Button>
        </form>
        <div className="mt-6 text-center text-textSecondary">
          <p>
            Forgot your password?
            <a href="#" className="text-blueAccent hover:underline">
              Reset here
            </a>
          </p>
          <p>
            Don't have an account?
            <a href="#" className="text-blueAccent hover:underline">
              Register here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
