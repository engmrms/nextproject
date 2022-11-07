import { useCallback, useState } from "react";

const createNewObject = (): Record<string, never> => ({});

export const useForceUpdate = shouldUpdate => {
  const [, setValue] = useState<Record<string, never>>(createNewObject);
  if (!shouldUpdate) {
    return;
  }
  return (): void => {
    setValue(createNewObject());
  };
};
