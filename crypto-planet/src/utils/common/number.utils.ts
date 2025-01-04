export const formatNumber = (value: number | undefined): string => {
  if (value === undefined) return "-";
  return value.toLocaleString();
};
