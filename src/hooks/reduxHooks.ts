import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { appDispatchType } from "../types/reduxTypes";
import { AppState } from "../redux/store/store";

export const useAppDispatch: () => appDispatchType = useDispatch;
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
