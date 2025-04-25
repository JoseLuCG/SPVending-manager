import { ClubInfoDisplay } from '../models/club';
import { Machine } from '../models/machine';
import { Tenant, TenantInfoDisplay } from '../models/tenant';
import { User } from '../models/user';
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
    dataToDisplay : TenantInfoDisplay[] | ClubInfoDisplay[] | Machine[] | User[]
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