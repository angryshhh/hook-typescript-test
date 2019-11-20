import React from 'react';
import useFriendStatus from './useFirendStatus';

interface Friend {
  id: number;
  name: string;
}

interface Props {
  friend: Friend;
}

const FriendItem: React.FC<Props> = (props) => {
  const isOnline = useFriendStatus(props.friend.id);
  return (
    <li>
      <span
        style={{ color: isOnline ? 'green' : 'gray' }}
      >
        {props.friend.name} （{isOnline === null ? 'loading' : isOnline ? '在线' : '离线'}）
      </span>
    </li>
  );
}

export default FriendItem;