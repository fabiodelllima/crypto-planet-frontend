interface CardProps {
  icon?: string;
  name?: string;
  price?: number;
  change?: number;
  chartData?: number[];
}

const Card = ({ icon, name, price, change, chartData }: CardProps) => {
  return (
    <div className="px-4 py-2 bg-gray-200 rounded-lg">
      <div className="flex justify-between">
        <div className="flex flex-col gap-2">
          <div className="flex gap-2">
            <span>{icon}</span>
            <span>{name}</span>
          </div>
          <div className="flex gap-4">
            <span>{price}</span>
            <span className="text-green-600">{change}</span>
          </div>
        </div>

        <div className="flex items-center p-4 border rounded-lg border-black">
          <span>{chartData}</span>
        </div>
      </div>
    </div>
  );
};

export default Card;
