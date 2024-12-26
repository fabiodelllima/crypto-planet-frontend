const Loading = () => {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-backgroundMain">
      <div className="w-12 h-12 border-4 border-gray-600 border-t-bluePrimary rounded-full animate-spin">
        <span className="sr-only">Carregando...</span>
      </div>
    </div>
  );
};

export default Loading;
