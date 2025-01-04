import { IMarket } from "../../../interfaces/market.interfaces";
import { randomId } from "../../../utils/common/id.utils";
import { generateChartData } from "../../../utils/domain/chart.utils";

export const cryptoCardsData = [
  {
    id: randomId(),
    icon: "E",
    name: "Ethereum",
    price: 38405.4,
    change: 7.65,
    chartData: generateChartData(38405.4, 39000, 37000, 7.65),
  },
  {
    id: randomId(),
    icon: "B",
    name: "Binance",
    price: 38405.4,
    change: -5.12,
    chartData: generateChartData(38405.4, 39000, 37000, -5.12),
  },
  {
    id: randomId(),
    icon: "X",
    name: "Litecoin",
    price: 138.61,
    change: 3.45,
    chartData: generateChartData(138.61, 140, 135, 3.45),
  },
  {
    id: randomId(),
    icon: "P",
    name: "Polygon",
    price: 1.88,
    change: -2.78,
    chartData: generateChartData(1.88, 2.0, 1.7, -2.78),
  },
];

export const tableData: IMarket[] = [
  {
    id: randomId(),
    rank: 1,
    favorite: false,
    name: "Bitcoin",
    symbol: "BTC",
    price: 43975.72,
    change24h: 0.8,
    highPrice24h: 44727.8,
    lowPrice24h: 43318.64,
    chart: generateChartData(43975.72, 44727.8, 43318.64, 0.8),
  },
  {
    id: randomId(),
    rank: 2,
    favorite: false,
    name: "Ethereum",
    symbol: "ETH",
    price: 3187.62,
    change24h: -2.75,
    highPrice24h: 3263.16,
    lowPrice24h: 3077.03,
    chart: generateChartData(3187.62, 3263.16, 3077.03, -2.75),
  },
  {
    id: randomId(),
    rank: 3,
    favorite: false,
    name: "XRP",
    symbol: "XRP",
    price: 0.8721,
    change24h: 1.4,
    highPrice24h: 0.9091,
    lowPrice24h: 0.8484,
    chart: generateChartData(0.8721, 0.9091, 0.8484, 1.4),
  },
  {
    id: randomId(),
    rank: 4,
    favorite: false,
    name: "Litecoin",
    symbol: "LTC",
    price: 138.61,
    change24h: 0.38,
    highPrice24h: 140.79,
    lowPrice24h: 136.92,
    chart: generateChartData(138.61, 140.79, 136.92, 0.38),
  },
  {
    id: randomId(),
    rank: 5,
    favorite: false,
    name: "Polygon",
    symbol: "MATIC",
    price: 1.88,
    change24h: -1.46,
    highPrice24h: 2.06,
    lowPrice24h: 1.81,
    chart: generateChartData(1.88, 2.06, 1.81, -1.46),
  },
  {
    id: randomId(),
    rank: 6,
    favorite: false,
    name: "United States Dollar",
    symbol: "USDC",
    price: 42164.54,
    change24h: 0.78,
    highPrice24h: 42164.54,
    lowPrice24h: 42164.54,
    chart: generateChartData(42164.54, 42164.54, 42164.54, 0.78),
  },
  {
    id: randomId(),
    rank: 7,
    favorite: false,
    name: "Solana",
    symbol: "SOL",
    price: 112.13,
    change24h: 1.06,
    highPrice24h: 116.83,
    lowPrice24h: 110.66,
    chart: generateChartData(112.13, 116.83, 110.66, 1.06),
  },
  {
    id: randomId(),
    rank: 8,
    favorite: false,
    name: "Cardano",
    symbol: "ADA",
    price: 1.18,
    change24h: -0.33,
    highPrice24h: 1.21,
    lowPrice24h: 1.17,
    chart: generateChartData(1.18, 1.21, 1.17, -0.33),
  },
  {
    id: randomId(),
    rank: 9,
    favorite: false,
    name: "Tether",
    symbol: "USDT",
    price: 42164.54,
    change24h: 0.76,
    highPrice24h: 42164.54,
    lowPrice24h: 42164.54,
    chart: generateChartData(42164.54, 42164.54, 42164.54, 0.76),
  },
  {
    id: randomId(),
    rank: 10,
    favorite: false,
    name: "Avalanche",
    symbol: "AVAX",
    price: 89.62,
    change24h: -2.44,
    highPrice24h: 91.93,
    lowPrice24h: 87.38,
    chart: generateChartData(89.62, 91.93, 87.38, -2.44),
  },
  {
    id: randomId(),
    rank: 11,
    favorite: false,
    name: "Polkadot",
    symbol: "DOT",
    price: 21.71,
    change24h: 0.98,
    highPrice24h: 22.21,
    lowPrice24h: 21.42,
    chart: generateChartData(21.71, 22.21, 21.42, 0.98),
  },
  {
    id: randomId(),
    rank: 12,
    favorite: false,
    name: "Dogecoin",
    symbol: "DOGE",
    price: 0.1568,
    change24h: -0.08,
    highPrice24h: 0.1607,
    lowPrice24h: 0.1557,
    chart: generateChartData(0.1568, 0.1607, 0.1557, -0.08),
  },
  {
    id: randomId(),
    rank: 13,
    favorite: false,
    name: "Binance",
    symbol: "BNB",
    price: 423.1,
    change24h: -1.52,
    highPrice24h: 427.39,
    lowPrice24h: 412.9,
    chart: generateChartData(423.1, 427.39, 412.9, -1.52),
  },
  {
    id: randomId(),
    rank: 14,
    favorite: false,
    name: "Cosmos",
    symbol: "ATOM",
    price: 30.45,
    change24h: 0.2,
    highPrice24h: 31.43,
    lowPrice24h: 29.97,
    chart: generateChartData(30.45, 31.43, 29.97, 0.2),
  },
  {
    id: randomId(),
    rank: 15,
    favorite: false,
    name: "NEAR Protocol",
    symbol: "NEAR",
    price: 12.65,
    change24h: -1.27,
    highPrice24h: 13.06,
    lowPrice24h: 12.33,
    chart: generateChartData(12.65, 13.06, 12.33, -1.27),
  },
  {
    id: randomId(),
    rank: 16,
    favorite: false,
    name: "TRON",
    symbol: "TRX",
    price: 0.0704,
    change24h: 2.77,
    highPrice24h: 0.07068,
    lowPrice24h: 0.06868,
    chart: generateChartData(0.0704, 0.07068, 0.06868, 2.77),
  },
  {
    id: randomId(),
    rank: 17,
    favorite: false,
    name: "Algorand",
    symbol: "ALGO",
    price: 1.02,
    change24h: 0.43,
    highPrice24h: 1.04,
    lowPrice24h: 1.01,
    chart: generateChartData(1.02, 1.04, 1.01, 0.43),
  },
  {
    id: randomId(),
    rank: 18,
    favorite: false,
    name: "Bitcoin Cash",
    symbol: "BCH",
    price: 345.91,
    change24h: -1.97,
    highPrice24h: 347.29,
    lowPrice24h: 335.88,
    chart: generateChartData(345.91, 347.29, 335.88, -1.97),
  },
  {
    id: randomId(),
    rank: 19,
    favorite: false,
    name: "Stellar",
    symbol: "XLM",
    price: 0.2388,
    change24h: -1.2,
    highPrice24h: 0.2434,
    lowPrice24h: 0.2355,
    chart: generateChartData(0.2388, 0.2434, 0.2355, -1.2),
  },
  {
    id: randomId(),
    rank: 20,
    favorite: false,
    name: "Terra",
    symbol: "LUNA",
    price: 55.25,
    change24h: 2.51,
    highPrice24h: 57.87,
    lowPrice24h: 54.63,
    chart: generateChartData(55.25, 57.87, 54.63, 2.51),
  },
];
