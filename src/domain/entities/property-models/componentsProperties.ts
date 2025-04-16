import { Tenant } from '../models/tenant';
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
    infoDisplay: InfoDisplay
}