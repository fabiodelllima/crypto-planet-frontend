import { createColumnHelper } from "@tanstack/react-table";
import { LineChart, Line } from "recharts";
import { IMarket } from "../../../interfaces/market.interfaces";
import { formatNumber } from "../../../utils/common/number.utils";
import { generateChartData } from "../../../utils/domain/chart.utils";
import StarIcon from "../../../assets/icons/star.svg";

const columnHelper = createColumnHelper<IMarket>();

export const marketTableColumns = [
  columnHelper.accessor("favorite", {
    header: () => "",
    cell: () => (
      <div className="w-[50px] px-4">
        <img src={StarIcon} alt="Favorite" />
      </div>
    ),
  }),
  columnHelper.accessor("rank", {
    header: () => "#",
    cell: (info) => (
      <div className="w-[40px] px-4 text-grey-300">
        {info.getValue() ?? "-"}
      </div>
    ),
  }),
  columnHelper.accessor("name", {
    header: () => "Coin Name",
    cell: (info) => (
      <div className="min-w-[200px] px-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-full bg-bluePrimary"></div>
          <span className="text-gray-300">{info.getValue() ?? "-"}</span>
          <span className="text-bluePrimary">
            {info.row.original.symbol ?? "-"}
          </span>
        </div>
      </div>
    ),
  }),
  columnHelper.accessor("price", {
    header: () => (
      <div className="flex items-center gap-1 text-gray-400">
        Coin Price <span>▲</span>
      </div>
    ),
    cell: (info) => (
      <div className="min-w-[120px] px-4 text-gray-300">
        ${formatNumber(info.getValue())}
      </div>
    ),
  }),
  columnHelper.accessor("change24h", {
    header: () => (
      <div className="flex items-center gap-1 text-gray-400">
        24h <span>▲</span>
      </div>
    ),
    cell: (info) => {
      const value = info.getValue();
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
  }),
  columnHelper.accessor("highPrice24h", {
    header: () => (
      <div className="flex items-center gap-1 text-gray-400">
        24h High Price <span>▲</span>
      </div>
    ),
    cell: (info) => (
      <div className="min-w-[120px] px-4 text-gray-300">
        ${formatNumber(info.getValue())}
      </div>
    ),
  }),
  columnHelper.accessor("lowPrice24h", {
    header: () => (
      <div className="flex items-center gap-1 text-gray-400">
        24h Low Price <span>▲</span>
      </div>
    ),
    cell: (info) => (
      <div className="min-w-[120px] px-4 text-gray-300">
        ${formatNumber(info.getValue())}
      </div>
    ),
  }),
  columnHelper.accessor("chart", {
    header: () => (
      <div className="flex items-center gap-1 text-gray-400">
        Chart <span>▲</span>
      </div>
    ),
    cell: (info) => {
      const chartData = info.getValue();
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
  }),
];

export default marketTableColumns;
