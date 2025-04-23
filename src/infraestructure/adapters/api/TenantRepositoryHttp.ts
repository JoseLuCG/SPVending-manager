import { TenantRepository } from "../../../domain/ports/TenantRepository";
import { Tenant, TenantInfoDisplay } from "../../../domain/entities/models/tenant";
import { BASE_URL_SERVER, TENANT_PREFIX } from "../../../utilities/defines/api/api-routes";
import { mapTenantFromApi } from "../../mappers/FromApi/TenantMapper";
import { mapTenantToApi } from "../../mappers/ToApi/TenantMapperToApi";

export class TenantRepositoryHttp implements TenantRepository {
    private BASEURL = BASE_URL_SERVER + TENANT_PREFIX;

    async findTenantByUuid(tenantUuid: string): Promise<Tenant | null> {
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
        console.log(body);
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
        const response = await fetch(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(tenant),
                headers: { "Content-Type": "application/json" }
            }
        );
        if (!response.ok) throw new Error("Error when modifying the tenant");
    }

    async deleteTenant(uuid: string): Promise<void> {
        const response = await fetch(`${this.BASEURL}/${uuid}`);
        if (!response.ok) throw new Error("Error deleting tenant");
    }
}