import styled from '@emotion/styled';

export const StatisticsBoard = styled.section`
  margin: 0 auto;
  width: 280px;
  padding-top: 30px;
  text-align: center;
  background-color: #fff;
`;
export const Title = styled.h2`
  font-size: 16px;
  font-weight: 500;
  color: gray;
  margin-bottom: 30px;
  text-transform: uppercase;
`;
export const StatList = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  padding: 0;
`;
export const StatItem = styled.li`
  width: calc(100% / 5);
  display: flex;
  flex-direction: column;
  background-color: rgb(164, 161, 161);
  border: solid 0.5px gray;
  padding-top: 8px;
  padding-bottom: 8px;
`;
export const Label = styled.span`
  color: #fff;
  font-size: 10px;
`;
export const Percentage = styled.span`
  color: #fff;
  margin-top: 3px;
`;
