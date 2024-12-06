export const randomId = (): string => {
  const randomNumber = Math.floor(Math.random() * 1000);
  if (isNaN(randomNumber)) {
    throw new Error("Failed to generate random number");
  }

  return `${Date.now() + randomNumber}`;
};

export const formatNumber = (value: number | undefined): string => {
  if (value === undefined) return "-";
  return value.toLocaleString();
};
