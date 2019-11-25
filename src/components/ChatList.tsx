import React from 'react';
import { useTypedSelector } from '../store';

const ChatList: React.FC = () => {
  const chat = useTypedSelector(state => state.chat);
  return (
    <div>
      {
        chat.messages.map(message =>
          <div key={message.timestamp}>
            <p style={{color: 'red'}}>{message.user}（{new Date(message.timestamp).toLocaleString()}）</p>
            <p>{ message.message }</p>
          </div>
        )
      }
    </div>
  );
};

export default ChatList;
