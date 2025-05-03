import { ReactNode } from "react";
import { Club } from "../models/club";
import { Machine } from "../models/machine";
import { Tenant } from "../models/tenant";
import { User } from "../models/user";

export type SelectedItemContextType = [SelectedItemType, React.Dispatch<React.SetStateAction<SelectedItemType|null>>];

export type SelectedItemType = User | Machine | Tenant | Club | null;

export type SelectedItemProviderProps = {
    children: ReactNode;
}