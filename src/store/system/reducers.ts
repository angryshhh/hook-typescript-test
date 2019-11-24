import { SystemState, UPDATE_SESSION, SystemActionTypes } from './types';

const initialData: SystemState = {
  loggedIn: false,
  session: '',
  userName: '',
};

export function systemReducer(
  state = initialData,
  action: SystemActionTypes
): SystemState {
  switch (action.type) {
    case UPDATE_SESSION:
      return {
        ...state,
        ...action.payload
      };
    default:
      return state;
  }
};
