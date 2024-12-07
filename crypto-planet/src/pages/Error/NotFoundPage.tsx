const NotFoundPage = () => {
  return (
    <div className="min-h-screen bg-container flex flex-col items-center justify-center p-6 text-white">
      <h1 className="text-6xl font-bold text-blueAccent mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-textSecondary text-center max-w-md mb-8">
        Sorry, the page you're looking for doesn't exist or has been moved.
      </p>
      <button
        onClick={() => (window.location.href = "/")}
        className="py-2 px-6 bg-blueAccent text-black rounded-lg font-semibold hover:bg-opacity-80 transition"
      >
        Go to Homepage
      </button>
    </div>
  );
};

export default NotFoundPage;
