import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
  margin: 0 auto;
  width: 560px;
  border: solid 2px rgb(164, 161, 161);
  background-color: #fff;
`;

export const TitleHead = styled.thead`
  background-color: rgb(164, 161, 161);
  color: #fff;
`;
export const TitleList = styled.tr``;
export const TitleType = styled.th`
  border: solid 2px rgb(164, 161, 161);
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const TitleAmound = styled.th`
  border: solid 2px rgb(164, 161, 161);
`;
export const TitleCurrency = styled.th`
  border: solid 2px rgb(164, 161, 161);
`;

export const TransactionList = styled.tbody``;
export const TransactionItem = styled.tr`
  text-align: center;
  background-color: ${function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  }};
`;
export const TransactionType = styled.td`
  border: solid 2px rgb(164, 161, 161);
  padding-top: 10px;
  padding-bottom: 10px;
`;
export const TransactionAmound = styled.td`
  border: solid 2px rgb(164, 161, 161);
`;
export const TransactionCurrency = styled.td`
  border: solid 2px rgb(164, 161, 161);
`;
