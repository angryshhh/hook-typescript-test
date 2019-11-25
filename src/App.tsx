import React from 'react';
import Counter from './components/Counter';
import FriendsList from './components/FriendsList';
import ChatRoom from './components/ChatRoom';

const friends = [{id: 1, name: 'cui'}, {id: 2, name: 'qi'}, {id: 3, name: 'haha'}];

const App: React.FC = () => {
  return (
    <div className="App">
      <Counter initialData={4}/>
      <FriendsList friends={friends} />
      <ChatRoom />
    </div>
  );
}

export default App;
