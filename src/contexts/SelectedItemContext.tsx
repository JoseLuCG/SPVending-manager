import { createContext, useState } from "react";
import { SelectedItemContextType, SelectedItemProviderProps, SelectedItemType } from "../domain/entities/context-models/contextModels";

export const SelectedItem = createContext<SelectedItemContextType>([null, () => {}]);

export function SelectedItemContext({ children }: SelectedItemProviderProps) {
  const [item, setItem] = useState<SelectedItemType|null>(null);

  return (
    <SelectedItem.Provider value={[item, setItem]}>
      {children}
    </SelectedItem.Provider>
  );
}