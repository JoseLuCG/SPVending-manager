import { ClubInfoDisplay } from "../models/club";
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

export type ClubApiResponse = {
    content: ClubInfoDisplay[],
    page: PageInfo
}