import { useState, useEffect } from 'react';
import ChatApi from '../api/ChatApi';

const useFriendStatus = (friendId: number) => {
  const [isOnline, setIsOnline] = useState<boolean | null>(null);
  useEffect(() => {
    ChatApi.subscribe(friendId, setIsOnline);
    return () => {
      ChatApi.unsubscribe(friendId, setIsOnline);
    };
  }, [friendId]);
  return isOnline;
}

export default useFriendStatus;
