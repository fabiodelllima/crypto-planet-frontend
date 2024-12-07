interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container = ({ children, className = "" }: ContainerProps) => {
  return (
    <div className={`bg-container p-8 rounded-lg shadow-md ${className}`}>
      {children}
    </div>
  );
};

export default Container;
