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

export const generateChartData = (
  basePrice: number,
  highPrice: number,
  lowPrice: number,
  change: number
) => {
  const points = 15;
  const data = [];
  const range = (highPrice - lowPrice) * 2;
  const frequencies = [1, 2, 3, 4];

  for (let i = 0; i < points; i++) {
    const t = i / (points - 1);

    let variation = 0;
    frequencies.forEach((freq, index) => {
      const amplitude = Math.random() * 0.5 + 0.5;
      variation +=
        Math.sin(t * Math.PI * freq + (basePrice % freq)) * amplitude;
    });

    variation = variation / frequencies.length;

    const trend = change >= 0 ? t * 0.5 : -t * 0.5;
    const price = basePrice + range * variation + trend * range;
    const noise = (Math.random() - 0.5) * range * 0.1;

    data.push({
      value: price + noise,
      index: i,
    });
  }

  const smoothedData = [];
  for (let i = 0; i < data.length; i++) {
    if (i === 0 || i === data.length - 1) {
      smoothedData.push(data[i]);
      continue;
    }

    const smoothedValue = {
      value: (data[i - 1].value + data[i].value + data[i + 1].value) / 3,
      index: data[i].index,
    };
    smoothedData.push(smoothedValue);
  }

  return smoothedData;
};
