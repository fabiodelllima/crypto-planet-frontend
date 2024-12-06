import Card from "../../components/common/Card";

import { cryptoCardsData } from "./MarketData";
import MarketTable from "./MarketTable";

const MarketPage = () => {
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
          {cryptoCardsData.map((cryptoCard) => (
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

      <section>
        <MarketTable />
      </section>
    </section>
  );
};

export default MarketPage;
