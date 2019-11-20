import React, { useState, useEffect } from 'react';
import FriendItem from './FriendItem';

interface Friend {
  id: number;
  name: string;
};
interface Props {
  friends: Array<Friend>;
}

const FriendsList: React.FC<Props> = (props) => {
  const [friends, setFriends] = useState(props.friends);
  const [newFriend, setNewFriend] = useState('');
  useEffect(() => {
    setNewFriend('新朋友名字');
  }, [friends]);

  return (
    <div>
      <ul>
        {
          friends.map(friend => <FriendItem key={friend.id} friend={friend} />)
        }
      </ul>
      <input value={newFriend} onChange={(e) => setNewFriend(e.target.value)} />
      <button onClick={() =>
          setFriends(prev => [...prev, {id: prev.length + 1, name: newFriend}])
        }
      >添加</button>
    </div>
  );
}

export default FriendsList;
