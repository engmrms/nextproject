import { IToastType } from "./modal";
import { useToastDispatchContext } from "./ToastContext";

export function useToast(delay: number) {
  const dispatch = useToastDispatchContext();

  function toast(type: IToastType, message: string) {
    const id = Math.random().toString(36).substr(2, 9);
    const toast = {
      type,
      message,
      id,
    };
    dispatch({
      type: "ADD_TOAST",
      toast,
    });

    setTimeout(() => {
      dispatch({ type: "DELETE_TOAST", toast });
    }, delay);
  }

  return toast;
}
