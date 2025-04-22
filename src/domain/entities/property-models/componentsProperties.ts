import { Club } from '../models/club';
import { Machine } from '../models/machine';
import { Tenant } from '../models/tenant';
import { User } from '../models/user';
import { Handler, InfoDisplay } from './genericModels';

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
    infoDisplay: InfoDisplay,
    dataToDisplay : Tenant[] | Club[] | Machine[] | User[]
}

export type TenantRegisterModalProps = {
    isOpen: boolean,
    onClose: Handler
}
