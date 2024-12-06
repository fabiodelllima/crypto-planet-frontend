import Card from "../components/common/Card";

const MarketPage = () => {
  const cryptoCards = [
    {
      id: Date.now() + Math.floor(Math.random() * 1000),
      icon: "X",
      name: "Ethereum",
      price: 38405.4,
      change: 7.65,
      chartData: [25, 27, 30, 28, 35, 32, 40],
    },
    {
      id: Date.now() + Math.floor(Math.random() * 1000),
      icon: "X",
      name: "Binance",
      price: 38405.4,
      change: -5.12,
      chartData: [40, 35, 30, 25, 28, 32, 35],
    },
    {
      id: Date.now() + Math.floor(Math.random() * 1000),
      icon: "X",
      name: "Litecoin",
      price: 38405.4,
      change: 3.45,
      chartData: [20, 25, 22, 30, 28, 32, 35],
    },
    {
      id: Date.now() + Math.floor(Math.random() * 1000),
      icon: "X",
      name: "Polygon",
      price: 38405.4,
      change: -2.78,
      chartData: [30, 28, 25, 22, 20, 18, 15],
    },
  ];

  return (
    <section className="flex flex-col gap-6">
      <section>
        <h2>Cryptocurrency Prices by Market Cap</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      </section>

      <section className="flex gap-4">
        <select
          defaultValue="filterType"
          className="w-[50%] px-4 py-2 rounded-lg"
        >
          <option value="default">Filter</option>
        </select>
        <select
          defaultValue="filterDate"
          className="w-[50%] px-4 py-2 rounded-lg"
        >
          <option value="default">Today</option>
        </select>
      </section>

      <section>
        <ul className="flex flex-col gap-4">
          {cryptoCards.map((cryptoCard) => (
            <li key={cryptoCard.id}>
              <Card
                icon={cryptoCard.icon}
                name={cryptoCard.name}
                price={cryptoCard.price}
                change={cryptoCard.change}
                chartData={cryptoCard.chartData}
              />
            </li>
          ))}
        </ul>
      </section>
    </section>
  );
};

export default MarketPage;
