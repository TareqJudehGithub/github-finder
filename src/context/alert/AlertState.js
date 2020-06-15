import React, { useReducer } from "react";
import AlertContext from './alertContext';
import AlertReducer from "./alertReducer";

import {
     SET_ALERT, REMOVE_ALERT,
     } from "../types";

const AlertState = (props) => {

     const INITIAL_STATE = {
         alert: null
     };

     const [state, dispatch] = useReducer(AlertReducer, INITIAL_STATE);

     //Alerts upon submission with no input data:
     const setAlertHandler = (msg, type) => {
         dispatch({
              type: SET_ALERT,
              payload: { msg, type }
         })
         setTimeout(() => dispatch({ type: REMOVE_ALERT}), 3000);
     };

     return <AlertContext.Provider
          value= {{
               alert: state.alert,
               setAlertHandler
          }}>
               {props.children}
     </AlertContext.Provider>
}
export default AlertState;