import { createContext,useReducer} from "react";
import Reducer from "./Reducer";
const INITIAL_STATE={
userdata:null,
isFetching:false,
error:false,
};
export const Context=createContext(INITIAL_STATE);
export const ContextProvider=({children})=>{
    const [state,dispatch]=useReducer(Reducer,INITIAL_STATE);
    return(
        <Context.Provider 
        value={{
            userdata:state.userdata,
            isFetching:state.isFetching,
            error:state.error,
            dispatch,}}> {children}</Context.Provider>
    )
  
}