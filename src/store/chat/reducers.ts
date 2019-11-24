// type checked chat reducer
import {
  ChatState,
  ChatActionTypes,
  SEND_MESSAGE,
  DELETE_MESSAGE,
} from './type';

const initialData: ChatState = {
  messages: [],
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
