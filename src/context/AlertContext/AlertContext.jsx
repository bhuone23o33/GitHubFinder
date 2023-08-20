import { createContext } from "react";
import { useReducer } from "react";
import Alert from "./AlertReducer";

const AlertContext = createContext();

export const AlertProvider = ({ children })=>{
    const initial = null;

    const [state,dispatch] = useReducer(Alert,initial);

    const setAlert = (msg,type)=>{
        dispatch({
            type:'SET_ALERT',
            payload:{msg,type}
        });

        setTimeout(()=>{
            dispatch({
                type:'REMOVE_ALERT'
            })
        },3000);
    }




    return <AlertContext.Provider
        value={{
            alert:state,
            setAlert
        }}
    >
        {children}
    </AlertContext.Provider>
}

export default AlertContext