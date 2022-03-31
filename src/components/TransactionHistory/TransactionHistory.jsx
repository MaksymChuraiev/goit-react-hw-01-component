import PropTypes from 'prop-types';
import {
  TransactionHistoryTable,
  TitleHead,
  TitleList,
  TitleType,
  TitleAmound,
  TitleCurrency,
  TransactionList,
  TransactionItem,
  TransactionType,
  TransactionAmound,
  TransactionCurrency,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionHistoryTable>
      <TitleHead>
        <TitleList>
          <TitleType>Type</TitleType>
          <TitleAmound>Amound</TitleAmound>
          <TitleCurrency>Currency</TitleCurrency>
        </TitleList>
      </TitleHead>
      <TransactionList>
        {items.map(({ id, type, amount, currency }) => (
          <TransactionItem key={id}>
            <TransactionType>{type}</TransactionType>
            <TransactionAmound>{amount}</TransactionAmound>
            <TransactionCurrency>{currency}</TransactionCurrency>
          </TransactionItem>
        ))}
      </TransactionList>
    </TransactionHistoryTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
