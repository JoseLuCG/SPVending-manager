import { TenantRepository } from "../../../domain/ports/TenantRepository";
import { TenantInfoDisplay } from "../../../domain/entities/models/tenant";

export class GetTenantList {
    constructor( private tenantRepository: TenantRepository ){};

    async execute(page:number): Promise<TenantInfoDisplay[]> {
        const tenants: TenantInfoDisplay[] = await this.tenantRepository.getAllTenants(page);

        if(!tenants) throw new Error("Tenant list is not available");

        return tenants;
    }
}