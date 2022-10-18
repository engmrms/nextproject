import React, { createContext, useContext, useReducer } from "react";
import { IToast } from "./modal";

const ToastStateContext = createContext<{ toasts: IToast[] }>({ toasts: [] });
const ToastDispatchContext = createContext<React.Dispatch<any>>(() => null);

function ToastReducer(state: { toasts: IToast[] }, action: { type: "ADD_TOAST" | "DELETE_TOAST"; toast: IToast }) {
  switch (action.type) {
    case "ADD_TOAST": {
      return {
        ...state,
        toasts: [...state.toasts, action.toast],
      };
    }
    case "DELETE_TOAST": {
      const updatedToasts = state.toasts.filter(e => e.id !== action.toast.id);
      return {
        ...state,
        toasts: updatedToasts,
      };
    }
    default: {
      throw new Error("unhandled action");
    }
  }
}

export function ToastProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(ToastReducer, {
    toasts: [],
  });

  return (
    <ToastStateContext.Provider value={state}>
      <ToastDispatchContext.Provider value={dispatch}>{children}</ToastDispatchContext.Provider>
    </ToastStateContext.Provider>
  );
}

export const useToastStateContext = () => useContext(ToastStateContext);
export const useToastDispatchContext = () => useContext(ToastDispatchContext);
