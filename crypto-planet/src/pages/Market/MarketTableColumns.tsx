import { ColumnDef } from "@tanstack/react-table";
import { LineChart, Line } from "recharts";
import { IMarket } from "../../interfaces/market.interfaces";
import { formatNumber, generateChartData } from "../../utils/helpers.utils";
import StarIcon from "../../assets/icons/star.svg";

const columns: ColumnDef<IMarket, string | number | boolean>[] = [
  {
    accessorKey: "favorite",
    header: "",
    cell: () => (
      <div className="w-[45px] px-4">
        <img src={StarIcon} alt="Favorite" />
      </div>
    ),
  },
  {
    accessorKey: "rank",
    header: "#",
    cell: (info) => (
      <div className="w-[40px] px-4 text-gray-300">
        {info.getValue() ?? "-"}
      </div>
    ),
  },
  {
    accessorKey: "name",
    header: "Coin Name",
    cell: (info) => (
      <div className="min-w-[200px] px-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-blueAccent"></div>
          <span className="text-gray-300">{info.getValue() ?? "-"}</span>
          <span className="text-blueAccent">
            {info.row.original.symbol ?? "-"}
          </span>
        </div>
      </div>
    ),
  },
  {
    accessorKey: "price",
    header: () => (
      <div className="flex items-center gap-1 text-gray-400">
        Coin Price <span>▲</span>
      </div>
    ),
    cell: (info) => (
      <div className="min-w-[120px] px-4 text-gray-300">
        ${formatNumber(info.getValue() as number)}
      </div>
    ),
  },
  {
    accessorKey: "change24h",
    header: () => (
      <div className="flex items-center gap-1 text-gray-400">
        24h <span>▲</span>
      </div>
    ),
    cell: (info) => {
      const value = info.getValue() as number;
      if (value === undefined) return "-";
      return (
        <div className="min-w-[100px] px-4">
          <span className={value >= 0 ? "text-green-500" : "text-red-500"}>
            {value > 0 ? "+" : ""}
            {value.toFixed(2)}%
          </span>
        </div>
      );
    },
  },
  {
    accessorKey: "highPrice24h",
    header: () => (
      <div className="flex items-center gap-1 text-gray-400">
        24h High Price <span>▲</span>
      </div>
    ),
    cell: (info) => (
      <div className="min-w-[120px] px-4 text-gray-300">
        ${formatNumber(info.getValue() as number)}
      </div>
    ),
  },
  {
    accessorKey: "lowPrice24h",
    header: () => (
      <div className="flex items-center gap-1 text-gray-400">
        24h Low Price <span>▲</span>
      </div>
    ),
    cell: (info) => (
      <div className="min-w-[120px] px-4 text-gray-300">
        ${formatNumber(info.getValue() as number)}
      </div>
    ),
  },
  {
    accessorKey: "chart",
    header: () => (
      <div className="flex items-center gap-1 text-gray-400">
        Chart <span>▲</span>
      </div>
    ),
    cell: (info) => {
      const chartData = info.getValue() as unknown as number[];
      if (!Array.isArray(chartData) || !chartData.length) return null;

      const data = generateChartData(
        info.row.original.price,
        info.row.original.highPrice24h,
        info.row.original.lowPrice24h,
        info.row.original.change24h
      );

      return (
        <div className="min-w-[100px] h-[40px] px-4">
          <LineChart width={100} height={40} data={data}>
            <Line
              type="monotone"
              dataKey="value"
              stroke={info.row.original.change24h >= 0 ? "#2563eb" : "#ef4444"}
              strokeWidth={1.5}
              dot={false}
              isAnimationActive={false}
            />
          </LineChart>
        </div>
      );
    },
  },
];

export default columns;
