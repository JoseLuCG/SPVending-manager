import { TenantRepository } from "../../../domain/ports/TenantRepository";
import { PotentialTenant, Tenant, TenantApi, TenantInfoDisplay } from "../../../domain/entities/models/tenant";
import { BASE_URL_SERVER, API_PREFIX, PATH_PREFIX } from "../../../utilities/defines/api/api-routes";
import { mapTenantFromApi } from "../../mappers/FromApi/TenantMapper";
import { mapTenantToApi } from "../../mappers/ToApi/TenantMapperToApi";
import { authHandler } from "../Auth/AuthHandler";

export class TenantRepositoryHttp implements TenantRepository {
    private BASEURL = BASE_URL_SERVER + API_PREFIX + PATH_PREFIX.tenantPath;

    async findTenantByUuid(tenantUuid: string): Promise<TenantApi | null> {
        const response = await fetch(`${this.BASEURL}/${tenantUuid}`, {credentials: "include"});
        if (!response.ok) return null;
        return response.json();
    }

    async getAllTenants(): Promise<TenantInfoDisplay[]> {
        const response = await fetch(this.BASEURL, {credentials: "include"});
        //const authorizedResponse = authHandler(response);
        const json = await response.json();
        /*if (response.status == 401) {
            const refreshedJson = authHandler(response);
            
            return mapTenantFromApi(refreshedJson);
        }*/
       
        return mapTenantFromApi(json);
    }

    async addTenant(tenant: Tenant): Promise<void> {
        const body = mapTenantToApi(tenant);
        const response = await fetch(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
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
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            }
        );
        if (!response.ok) throw new Error("Error when modifying the tenant");
    }

    async deleteTenant(uuid: string): Promise<void> {
        const response = await fetch(
            `${this.BASEURL}/${uuid}`,
            {
                method: "DELETE",
                credentials: "include"
            }
        );
        if (!response.ok) throw new Error("Error deleting tenant");
    }

    async getPotentialTenants(): Promise<PotentialTenant[]> {
        const response = await fetch(`${this.BASEURL}/${PATH_PREFIX.potentialTenants}`,{credentials: "include"});
        const data = await response.json();
        return data;
    }
}