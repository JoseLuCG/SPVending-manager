import { TenantInfoDisplay } from "../models/tenant";

export type PageInfo = {
    size: number;
    number: number;
    totalElements: number;
    totalPages: number;
};

export type TenantApiResponse = {
    content: TenantInfoDisplay[],
    page: PageInfo
}