// type checked chat reducer
import {
  ChatState,
  ChatActionTypes,
  SEND_MESSAGE,
  DELETE_MESSAGE,
} from './types';

const initialData: ChatState = {
  messages: [
    {
      message: 'nice to see you',
      user: 'cui',
      timestamp: new Date('2012-03-03').getTime(),
    },
    {
      message: 'I don\'t like you',
      user: 'qi',
      timestamp: new Date('2012-09-08').getTime(),
    },
  ],
};

export function chatReducer(
  state = initialData,
  action: ChatActionTypes
): ChatState {
  switch (action.type) {
    case SEND_MESSAGE:
      return {
        messages: [...state.messages, action.payload],
      };
    case DELETE_MESSAGE:
      return {
        messages: state.messages.filter(message => message.timestamp !== action.meta.timestamp),
      };
    default:
      return state;
  }
};
