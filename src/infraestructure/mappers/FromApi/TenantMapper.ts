import { Tenant } from "../../../domain/entities/models/tenant";

export async function mapTenantFromApi(apiData: unknown): Tenant[] {
    const data = await apiData.json();

    console.log(data);
    

    return apiData.content;
}