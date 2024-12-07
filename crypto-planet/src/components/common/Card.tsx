import { LineChart, Line } from "recharts";

interface CardProps {
  icon?: string;
  name: string;
  price: number;
  change: number;
  chartData: { value: number }[];
}

const Card = ({ name, price, change, chartData }: CardProps) => {
  return (
    <div className="bg-[#0A0A0A] rounded-lg px-6 py-4 min-w-[280px] max-w-[300px] flex flex-col gap-4 shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white">
            <span>X</span>
          </div>
          <span className="text-white font-medium">{name}</span>
        </div>
        <span
          className={`text-sm font-medium ${
            change >= 0 ? "text-green-500" : "text-red-500"
          }`}
        >
          {change >= 0 ? "+" : ""}
          {change}% {change >= 0 ? " ↑" : " ↓"}
        </span>
      </div>
      <div className="flex items-center justify-between">
        <div className="text-xl text-white font-semibold">
          ${price.toLocaleString("en-US", { minimumFractionDigits: 2 })}
        </div>
        <div className="w-[100px] h-[40px]">
          <LineChart width={100} height={40} data={chartData}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={change >= 0 ? "#2563eb" : "#ef4444"}
              strokeWidth={1.5}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </div>
      </div>
    </div>
  );
};

export default Card;
