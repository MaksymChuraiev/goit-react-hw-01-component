import styled from '@emotion/styled';

export const Item = styled.li`
  display: flex;
  justify-content: left;
  align-items: center;
  background-color: #fff;
  padding: 10px;
  :not(:last-child) {
    margin-bottom: 20px;
  }
`;
export const Status = styled.span`
  content: '';
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: ${({ isOnline }) => {
    switch (isOnline) {
      case 'true':
        return '#4caf50';
      case 'false':
        return '#f44336';
      default:
        return '#000';
    }
  }};
`;
export const Avatar = styled.img`
  margin-left: 10px;
  width: 80px;
  height: 80px;
`;
export const Name = styled.p`
  margin-left: 10px;
  font-size: 20px;
  font-weight: 700;
`;
