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

export type QuickFilterType =
  | "gainers"
  | "losers"
  | "new"
  | "trading"
  | "volume"
  | "all";

export interface MarketFilters {
  quickFilter: QuickFilterType;
  category?: string;
  algorithm?: string;
  platform?: string;
  industry?: string;
  search: string;
  itemsPerPage: number;
}
