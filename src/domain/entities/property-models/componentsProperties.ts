import { ClubApi, ClubInfoDisplay } from '../models/club';
import { MachineApi, MachineInfoDisplay } from '../models/machine';
import { Tenant, TenantApi, TenantInfoDisplay } from '../models/tenant';
import { UserApi, UserInfoDisplay } from '../models/user';
import { InfoDisplay } from './genericModels';


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
    dataToDisplay: TenantInfoDisplay[] | ClubInfoDisplay[] | MachineInfoDisplay[] | UserInfoDisplay[]
}

export type ModalProps = {
    isOpen: boolean,
    onClose: () => void
}

export type GenericModalProps = {
    typeModal: string
    isOpen: boolean,
    onClose: () => void
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