import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../store";


//When it's possible to import the RootState and AppDispatch types in to each compoenent, it's better to create
//typed versions of the useDispatch and useSelector hooks for usage in application.

//For useSelector => it saves you the need to type (state: RootState) everytime.
// For useDispatch, the default Dispatch type does not know about thunks. In order to correctly dispatch
//thunks, you need to use the specific customized AppDispatch type from thestore inclues the thunk middleware types.


export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

