import { useState } from "react";

import Input from "./Input";
import Button from "./Button";
import Container from "./Container";

interface PaymentFormProps {
  onSubmit: (amount: number) => void;
  className?: string;
}

const PaymentForm = ({ onSubmit, className }: PaymentFormProps) => {
  const [amount, setAmount] = useState<string>("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!amount) return;
    const numericAmount = parseFloat(amount);
    if (isNaN(numericAmount)) return;
    onSubmit(numericAmount);
    setAmount("");
  };

  return (
    <Container className={`space-y-4 ${className}`}>
      <h2 className="text-xl font-bold text-textPrimary">
        Select Currency and Payment
      </h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input label="Select Currency" value="USD" readOnly />
        <Input
          label="Amount"
          type="number"
          placeholder="Enter amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          required
        />
        <div>
          <p className="mb-2 text-textSecondary">Choose Payment method:</p>
          <label className="flex items-center gap-2">
            <input type="radio" name="payment" value="card" defaultChecked />
            <span>Credit & Debit Card</span>
          </label>
        </div>
        <Input label="Card Number" placeholder="1234 5678 9012 3456" required />
        <div className="grid grid-cols-2 gap-4">
          <Input label="Valid" placeholder="MM/YY" required />
          <Input label="CVV" placeholder="123" required />
        </div>
        <Button type="submit" className="w-full">
          Add Money
        </Button>
      </form>
    </Container>
  );
};

export default PaymentForm;
