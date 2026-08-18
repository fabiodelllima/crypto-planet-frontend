import { useMemo, useState } from "react";
import { IPortfolioTransaction } from "../../interfaces/portfolio.interfaces";
import { randomId } from "../../utils/common/id.utils";
import { useAuth } from "../../hooks/useAuth";

import Button from "../../components/common/Button";
import Modal from "../../components/common/Modal";
import PaymentForm from "../../components/common/PaymentForm";
import Container from "../../components/common/Container";
import PortfolioTable from "./Table/PortfolioTable";
import EyeHideIcon from "../../assets/icons/eye-hide.svg";
import EyeShowIcon from "../../assets/icons/eye-show.svg";

import { calculatePortfolioTotals } from "../../utils/domain/portfolio.utils";
import { updateUserTransactions } from "../../utils/storage/auth.storage.utils";

const PortfolioPage = () => {
  const { user } = useAuth();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [hideBalance, setHideBalance] = useState(false);

  // Optimistic-update slot: holds transactions added in this session that
  // have not yet propagated back through the auth context. The slot is
  // keyed on the source reference so that any external change (re-login,
  // hydration) discards the local override automatically. This is the
  // React-recommended pattern for adjusting state based on external
  // changes during render, replacing the previous effect-based mirroring.
  // See: https://react.dev/learn/you-might-not-need-an-effect#adjusting-some-state-when-a-prop-changes
  const sourceTransactions = user?.portfolio?.transactions;
  const [optimisticTransactions, setOptimisticTransactions] = useState<
    IPortfolioTransaction[] | null
  >(null);
  const [trackedSource, setTrackedSource] = useState(sourceTransactions);

  if (sourceTransactions !== trackedSource) {
    setTrackedSource(sourceTransactions);
    setOptimisticTransactions(null);
  }

  const transactions = useMemo(
    () => optimisticTransactions ?? sourceTransactions ?? [],
    [optimisticTransactions, sourceTransactions]
  );

  const portfolioTotals = useMemo(() => {
    return calculatePortfolioTotals(transactions);
  }, [transactions]);

  const handleAddMoney = (amount: number) => {
    const newTransaction: IPortfolioTransaction = {
      id: randomId(),
      action: "Deposited",
      amount,
      date: new Date().toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "2-digit",
      }),
      status: "Succesful",
    };

    const next = [newTransaction, ...transactions];
    setOptimisticTransactions(next);

    if (user?.email) {
      updateUserTransactions(user.email, next);
    }

    setIsPaymentModalOpen(false);
  };

  return (
    <section className="min-h-screen bg-[#111] text-white">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 p-4 lg:p-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:col-span-2 gap-6">
          <Container>
            <div className="p-1 space-y-6">
              <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                <div>
                  <h2 className="text-xl font-bold">Wallet</h2>
                  <p className="text-gray-400 text-sm">
                    Updated {user?.portfolio?.lastUpdate}
                  </p>
                </div>
                <div className="flex flex-row gap-2 w-full md:w-auto">
                  <Button buttonType="tertiary" className="w-[50%] md:w-auto">
                    Edit
                  </Button>
                  <Button buttonType="tertiary" className="w-[50%] md:w-auto">
                    Add New Wallet
                  </Button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row justify-between gap-6">
                <div>
                  <div className="flex items-center gap-2 text-gray-400 mb-2">
                    <span>Wallet Balance</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold">
                      $
                      {hideBalance
                        ? "******"
                        : portfolioTotals.total.toLocaleString()}
                    </span>
                    <button
                      onClick={() => setHideBalance(!hideBalance)}
                      className="text-gray-400 hover:text-white"
                    >
                      {hideBalance ? (
                        <img src={EyeShowIcon} alt="Show balance" />
                      ) : (
                        <img src={EyeHideIcon} alt="Hide balance" />
                      )}
                    </button>
                  </div>
                </div>
                <div className="flex justify-between sm:justify-start gap-4">
                  <div>
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <span>↓</span>
                      <span>Total Deposited</span>
                    </div>
                    <span className="text-xl">
                      ${portfolioTotals.totalDeposited.toLocaleString()}
                    </span>
                  </div>
                  <div>
                    <div className="flex flex-col gap-2 text-gray-400 mb-2">
                      <span>↑ Total Withdrawals</span>
                      <span className="text-xl text-white">
                        ${portfolioTotals.totalWithdrawn.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Container>
          <Container>
            <PortfolioTable data={transactions} />
          </Container>
        </div>
        <div className="hidden lg:block">
          <Container>
            <PaymentForm onSubmit={handleAddMoney} />
          </Container>
        </div>
      </div>

      <Button
        onClick={() => setIsPaymentModalOpen(true)}
        buttonType="floating"
        buttonSize="floating"
      >
        <span className="text-2xl">+</span>
      </Button>
      <Modal
        isOpen={isPaymentModalOpen}
        onClose={() => setIsPaymentModalOpen(false)}
        title=""
      >
        <PaymentForm onSubmit={handleAddMoney} />
      </Modal>
    </section>
  );
};

export default PortfolioPage;
