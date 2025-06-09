import { TenantRepository } from "../../../domain/ports/TenantRepository";
import { TenantApiResponse } from "../../../domain/entities/api-models/apiResponse";

export class GetTenantList {
    constructor( private tenantRepository: TenantRepository ){};

    async execute(page:number): Promise<TenantApiResponse> {
        const tenants: TenantApiResponse = await this.tenantRepository.getAllTenants(page);

        if(!tenants) throw new Error("Tenant list is not available");

        return tenants;
    }
}