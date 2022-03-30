import styled from '@emotion/styled';

export const ProfileBoard = styled.div`
  margin: 30px auto 0;

  width: 280px;
  height: 339px;
  background-color: #fff;
`;
export const Description = styled.div`
  padding: 30px 30px;
  text-align: center;
`;
export const Avatar = styled.img`
  background-color: grey;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
`;
export const Name = styled.p`
  margin-top: 20px;
  font-weight: 600;
  font-size: 22px;
`;
export const Tag = styled.p`
  margin-top: 10px;
  color: grey;
`;
export const Location = styled.p`
  margin-top: 10px;
  color: grey;
`;
export const Stats = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  overflow: hidden;
`;
export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: calc(280px / 3);
  text-align: center;
  background-color: rgb(164, 161, 161);
  padding-top: 20px;
  padding-bottom: 20px;
  border: solid 0.5px gray;
`;
export const Label = styled.span`
  color: grey;
  font-size: 12px;
`;
export const Quantity = styled.span`
  margin-top: 5px;
  font-weight: 600;
  font-size: 14px;
`;
