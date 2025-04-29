import { ReactNode } from "react";
import { Club } from "../models/club";
import { Machine } from "../models/machine";
import { Tenant } from "../models/tenant";
import { User } from "../models/user";

export type SelectedItemContextType = [SelectedItemType|null, React.Dispatch<React.SetStateAction<SelectedItemType|null>>];

export type SelectedItemType = User | Machine | Tenant | Club;

export type SelectedItemProviderProps = {
    children: ReactNode;
}