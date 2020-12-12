import React, { useContext } from "react";
import { GlobalContext } from "../context api/GlobalState";

export default function Transaction({ transaction }) {
  const { deleteTransaction } = useContext(GlobalContext);
  const sign = transaction.amount < 0 ? "-" : "+";

  return (
    <div>
      <li className={transaction.amount < 0 ? "minus" : "plus"}>
        {transaction.text}
        <span>
          {sign}${Math.abs(transaction.amount)}
          <button
            className="delete-btn"
            onClick={() => deleteTransaction(transaction.id)}
          >
            X
          </button>
        </span>
      </li>
    </div>
  );
}
