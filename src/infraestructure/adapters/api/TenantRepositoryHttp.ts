import { TenantRepository } from "../../../domain/ports/TenantRepository";
import { PotentialTenant, Tenant, TenantApi, TenantInfoDisplay } from "../../../domain/entities/models/tenant";
import { BASE_URL_SERVER, API_PREFIX, PATH_PREFIX } from "../../../utilities/defines/api/api-routes";
import { mapTenantFromApi } from "../../mappers/FromApi/TenantMapper";
import { mapTenantToApi } from "../../mappers/ToApi/TenantMapperToApi";

export class TenantRepositoryHttp implements TenantRepository {
    private BASEURL = BASE_URL_SERVER + API_PREFIX + PATH_PREFIX.tenantPath;

    async findTenantByUuid(tenantUuid: string): Promise<TenantApi | null> {
        const response = await fetch(`${this.BASEURL}/${tenantUuid}`);
        if (!response.ok) return null;
        return response.json();
    }

    async getAllTenants(): Promise<TenantInfoDisplay[]> {
        const response = await fetch(this.BASEURL);
        const json = await response.json();
        return mapTenantFromApi(json);
    }

    async addTenant(tenant: Tenant): Promise<void> {
        const body = mapTenantToApi(tenant);
        const response = await fetch(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" }
            }
        );
        if (!response.ok) throw new Error("Error adding tenant");
    }

    async modifyTenant(tenant: Tenant): Promise<void> {
        const body = mapTenantToApi(tenant);
        const response = await fetch(
            this.BASEURL+`/${tenant.tenantId}`,
            {
                method: "PUT",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" }
            }
        );
        if (!response.ok) throw new Error("Error when modifying the tenant");
    }

    async deleteTenant(uuid: string): Promise<void> {
        const response = await fetch(
            `${this.BASEURL}/${uuid}`,
            {
                method: "DELETE"
            }
        );
        if (!response.ok) throw new Error("Error deleting tenant");
    }

    async getPotentialTenants(): Promise<PotentialTenant[]> {
        const response = await fetch(`${this.BASEURL}/${PATH_PREFIX.potentialTenants}`);
        const data = await response.json();
        return data;
    }
}