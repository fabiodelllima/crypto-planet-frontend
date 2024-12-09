const RegisterPage = () => {
  return (
    <div className="min-h-screen bg-container flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-black rounded-lg shadow-lg p-8">
        <h1 className="text-2xl font-bold text-white text-center mb-6">
          Create Your Account
        </h1>
        <form className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-greyPrimary">
              Name
            </label>
            <input
              id="name"
              type="text"
              placeholder="Enter your name"
              className="w-full px-4 py-2 rounded-lg bg-container text-white border border-borderGray placeholder:text-greyPrimary focus:ring-2 focus:ring-bluePrimary outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-greyPrimary">
              Email
            </label>
            <input
              id="email"
              type="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 rounded-lg bg-container text-white border border-borderGray placeholder:text-greyPrimary focus:ring-2 focus:ring-bluePrimary outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="password" className="text-greyPrimary">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-2 rounded-lg bg-container text-white border border-borderGray placeholder:text-greyPrimary focus:ring-2 focus:ring-bluePrimary outline-none"
              required
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="confirmPassword" className="text-greyPrimary">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm your password"
              className="w-full px-4 py-2 rounded-lg bg-container text-white border border-borderGray placeholder:text-greyPrimary focus:ring-2 focus:ring-bluePrimary outline-none"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 bg-bluePrimary text-white rounded-lg font-semibold hover:bg-opacity-80 transition"
          >
            Register
          </button>
        </form>
        <div className="mt-6 text-center text-greyPrimary">
          <p>
            Already have an account?{" "}
            <a href="#" className="text-bluePrimary hover:underline">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
