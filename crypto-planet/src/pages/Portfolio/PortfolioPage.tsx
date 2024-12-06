import UpdateInfo from "../../components/common/UpdateInfo";

const PortfolioPage = () => {
  const mockUpdateDate = new Date();
  const mockUpdateTime = "02:30 PM";

  return (
    <section className="flex flex-col gap-2">
      <section>
        <h2>Wallet</h2>
        <UpdateInfo updateDate={mockUpdateDate} updateTime={mockUpdateTime} />
      </section>

      <section className="flex gap-2">
        <button className="py-2 border border-black bg-black text-white w-[50%] rounded-lg hover:bg-white hover:text-black">
          Edit
        </button>
        <button className="py-2 border border-black bg-black text-white w-[50%] rounded-lg hover:bg-white hover:text-black">
          Add New Wallet
        </button>
      </section>

      <section className="flex flex-col gap-2">
        <h3>Wallet Balance</h3>
        <div className="flex gap-4">
          <span>3245512</span>
          <button>Hide Price</button>
        </div>

        <div className="bg-gray-300 rounded-lg px-4 py-2">
          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>X</span>
              <span>Total Deposited</span>
            </div>
            <div className="flex gap-2">
              <span>X</span>
              <span>3245512</span>
            </div>
          </div>

          <div className="flex justify-between">
            <div className="flex gap-2">
              <span>X</span>
              <span>Total Withdrawls</span>
            </div>
            <div className="flex gap-2">
              <span>X</span>
              <span>200012</span>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default PortfolioPage;
