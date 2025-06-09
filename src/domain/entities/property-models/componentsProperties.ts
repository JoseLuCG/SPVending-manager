import { Dispatch, SetStateAction } from 'react';
import { ClubApi, ClubOfTenant } from '../models/club';
import { MachineApi } from '../models/machine';
import { Tenant, TenantApi } from '../models/tenant';
import { UserApi } from '../models/user';
import { InfoDisplay } from './genericModels';
import { Toast } from 'primereact/toast';
import { ClubApiResponse, MachineApiResponse, TenantApiResponse, UserApiResponse } from '../api-models/apiResponse';


export type DataRowProps = {
    data: Tenant
}

export type NavButtonsProps = {
    isAbove: boolean;
}

export type MenuButtonProps = {
    isAbove: boolean;
};

export type MainProps = {
    textInfoDisplay: InfoDisplay,
    dataToDisplay: TenantApiResponse | ClubApiResponse | MachineApiResponse | UserApiResponse | null,
    setterUuid: Dispatch<SetStateAction<string>>,
    setPage: Dispatch<SetStateAction<number>>
}

export type ModalProps = {
    isOpen: boolean,
    onClose: () => void,
    toastRef: React.RefObject<Toast|null>
}

export type GenericModalProps = {
    typeModal: string
    isOpen: boolean,
    onClose: () => void,
    toastRef: React.RefObject<Toast|null>
}

export type SelectTenantOptionProps = {
    onSelectTenant: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export type SelectClubOptionProps = {
    onSelectClub: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

export type SelectedItemType = UserApi | MachineApi | TenantApi | ClubApi | null;

export type DIITenantProps = {
    object: TenantApi | null
}

export type DIIClubProps = {
    object: ClubApi | null
}

export type DIIUserProps = {
    object: UserApi | null
}

export type DIIMachineProps = {
    object: MachineApi | null
}
// visible, position, setVisible
export type WarningProps = {
    visible: boolean,
    setVisible: () => void,
    uuid: string,
    setUuid: (string:string) => void
    position: "bottom" | "center" | "top" | "left" | "right" | "top-left" | "top-right" | "bottom-left" | "bottom-right" | undefined
}

export type ClubCardProps = {
    clubs: ClubOfTenant[]
}