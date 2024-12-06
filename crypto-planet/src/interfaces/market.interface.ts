export interface Market {
  id: string;
  rank: number;
  favorite: boolean;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  highPrice24h: number;
  lowPrice24h: number;
  chart: number[];
}
