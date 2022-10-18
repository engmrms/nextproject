export type IToastType = "success" | "warning" | "error";

export interface IToast {
  type: IToastType;
  message: string;
  id: string;
}
