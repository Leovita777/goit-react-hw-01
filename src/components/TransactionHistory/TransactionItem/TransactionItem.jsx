import css from "./TransactionItem.module.css";

const TransactionItem = ({ type, amount, currency }) => {
  return (
    <tr className={css.transactionRow}>
      <td className={css.cell}>{type}</td>
      <td className={css.cell}>{amount}</td>
      <td className={css.cell}>{currency}</td>
    </tr>
  );
};

export default TransactionItem;
