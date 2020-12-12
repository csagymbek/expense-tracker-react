import transitions from "@material-ui/core/styles/transitions";
import React, { useContext } from "react";
import { GlobalContext } from "../context api/GlobalState";

export default function Balance() {
  const { transactions } = useContext(GlobalContext);
  const amounts = transactions.map((transaction) => transaction.amount);
  const total = amounts.reduce((sum, amount) => (sum += amount), 0).toFixed(2);

  return (
    <>
      <h4>Your Balance</h4>
      <h1>${total}</h1>
    </>
  );
}
