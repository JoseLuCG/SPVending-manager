import { TenantClubsApiResponse } from "../../../domain/entities/api-models/apiResponse";
import { ClubOfTenant } from "../../../domain/entities/models/club";

export function mapTenantCLubsFromApi(apiData:TenantClubsApiResponse): ClubOfTenant[] {
    return apiData.content
}