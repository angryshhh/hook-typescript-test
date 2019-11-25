import React from 'react';
import ChatBox from './ChatBox';

import ChatList from './ChatList';

const ChatRoom: React.FC = () => {
  return (
    <div>
      <ChatList />
      <ChatBox />
    </div>
  );
};

export default ChatRoom;
