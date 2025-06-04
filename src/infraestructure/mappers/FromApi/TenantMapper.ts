import { TenantApiResponse, TenantClubsApiResponse } from "../../../domain/entities/api-models/apiResponse";
import { ClubOfTenant } from "../../../domain/entities/models/club";
import { TenantInfoDisplay } from "../../../domain/entities/models/tenant";

export function mapTenantFromApi(apiData: TenantApiResponse): TenantInfoDisplay[] {
    return apiData.content;
}

export function mapTenantCLubsFromApi(apiData:TenantClubsApiResponse): ClubOfTenant[] {
    return apiData.content
}