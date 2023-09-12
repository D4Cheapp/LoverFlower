import { store } from "../redux/store";

export type rootStateType = ReturnType<typeof store.getState>
export type appDispatchType = typeof store.dispatch;
export type appDispatchReturnType = ReturnType<appDispatchType>;
