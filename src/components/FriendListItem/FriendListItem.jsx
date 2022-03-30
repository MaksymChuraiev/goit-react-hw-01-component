// import PropTypes from 'prop-types';
import { Item, Status, Avatar, Name } from './FriendListItem.styled';

export const FriendListItem = ({ name, isOnline, avatar }) => {
  return (
    <Item>
      <Status isOnline={isOnline} />
      <Avatar src={avatar} />
      <Name>{name}</Name>
    </Item>
  );
};
