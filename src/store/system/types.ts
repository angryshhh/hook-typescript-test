// declare types
export interface SystemState {
  loggedIn: boolean;
  session: string;
  userName: string;
};

// System Action Constants & Shape:
export const UPDATE_SESSION = 'UPDATE_SESSION';

interface UpstateSessiongAction {
  type: typeof UPDATE_SESSION;
  payload: SystemState;
}

export type SystemActionTypes = UpstateSessiongAction;
