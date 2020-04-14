import React, { useEffect } from 'react';
import Counter from './components/Counter';
import FriendsList from './components/FriendsList';
import ChatRoom from './components/ChatRoom';

const friends = [{id: 1, name: 'cui'}, {id: 2, name: 'qi'}, {id: 3, name: 'haha'}];

let tree = (node: Element, level: number) => {
  let preNode = document.querySelector('pre');
  if (preNode) {

    preNode.append('  '.repeat(level) + node.tagName + '\n');
    for (let i = 0; i < node.children.length; i++) {
      tree(node.children[i], level + 1);
    }
  }
}

const App: React.FC = () => {
  useEffect(() => {
    tree(document.body, 0);
  }, []);

  return (
    <div className="App">
      <Counter initialData={4}/>
      <FriendsList friends={friends} />
      <ChatRoom />
      <pre></pre>
    </div>
  );
}

export default App;
