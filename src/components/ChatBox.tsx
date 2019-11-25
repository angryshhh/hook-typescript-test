import React, { useState } from 'react';
import { useDispatch} from 'react-redux';
import { sendMessage } from '../store/chat/actions';

const ChatBox: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div>
      我的名字：<input value={name} onChange={e => setName(e.target.value)} />
      <div>
        <textarea  value={message} onChange={e => setMessage(e.target.value)}/>
        <button onClick={() => dispatch(sendMessage({message, user: name, timestamp: new Date().getTime()}))}>发送</button>
      </div>
    </div>
  );
};

export default ChatBox;
