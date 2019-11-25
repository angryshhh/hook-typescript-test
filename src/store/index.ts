import { combineReducers } from 'redux';
import { useSelector, TypedUseSelectorHook } from 'react-redux';

import { chatReducer } from './chat/reducers';
import { systemReducer } from './system/reducers';

export const rootReducer = combineReducers({
  chat: chatReducer,
  system: systemReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
