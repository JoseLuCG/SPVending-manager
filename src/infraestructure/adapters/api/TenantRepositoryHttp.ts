import { TenantRepository } from "../../../domain/ports/TenantRepository";
import { PotentialTenant, Tenant, TenantApi, TenantInfoDisplay } from "../../../domain/entities/models/tenant";
import { BASE_URL_SERVER, API_PREFIX, PATH_PREFIX } from "../../../utilities/defines/api/api-routes";
import { mapTenantFromApi } from "../../mappers/FromApi/TenantMapper";
import { mapTenantToApi } from "../../mappers/ToApi/TenantMapperToApi";
import { authHandler } from "../Auth/AuthHandler";

export class TenantRepositoryHttp implements TenantRepository {
    private BASEURL = BASE_URL_SERVER + API_PREFIX + PATH_PREFIX.tenantPath;

    async findTenantByUuid(tenantUuid: string): Promise<TenantApi | null> {
        const response = await authHandler(`${this.BASEURL}/${tenantUuid}`, {credentials: "include"});    
        return await response;
    }

    async getAllTenants(): Promise<TenantInfoDisplay[]> {
        const json = await authHandler( this.BASEURL, { credentials: "include" });
        return mapTenantFromApi(json);
    }

    async addTenant(tenant: Omit<Tenant, "tenantId" | "numberOfClubs">): Promise<void> {
        const body = mapTenantToApi(tenant);
        const response = await authHandler(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            }
        );
        return response;
    }

    async modifyTenant(tenant: Omit<Tenant, "numberOfClubs">): Promise<void> {
        const body = mapTenantToApi(tenant);
        const response = await authHandler(
            this.BASEURL+`/${tenant.tenantId}`,
            {
                method: "PUT",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            }
        );
        return response;
    }

    async deleteTenant(uuid: string): Promise<void> {
        const response = await authHandler(
            `${this.BASEURL}/${uuid}`,
            {
                method: "DELETE",
                credentials: "include"
            }
        );
        return response;
    }

    async getPotentialTenants(): Promise<PotentialTenant[]> {
        const response = await authHandler(`${this.BASEURL}/${PATH_PREFIX.potentialTenants}`,{credentials: "include"});
        return response;
    }
}