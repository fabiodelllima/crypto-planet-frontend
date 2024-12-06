export interface IMarket {
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

export type TQuickFilter =
  | "gainers"
  | "losers"
  | "new"
  | "trading"
  | "volume"
  | "all";

export interface IMarketFilters {
  quickFilter: TQuickFilter;
  category?: string;
  algorithm?: string;
  platform?: string;
  industry?: string;
  search: string;
  itemsPerPage: number;
}
