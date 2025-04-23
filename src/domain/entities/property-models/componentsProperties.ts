import { Club } from '../models/club';
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
    dataToDisplay : TenantInfoDisplay[] | Club[] | Machine[] | User[]
}

export type TenantRegisterModalProps = {
    isOpen: boolean,
    onClose: () => void
}
