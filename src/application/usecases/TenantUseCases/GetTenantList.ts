import { TenantRepository } from "../../../domain/ports/TenantRepository";
import { Tenant } from "../../../domain/entities/models/tenant";

export class GetTenantList {
    constructor( private tenantRepository: TenantRepository ){};

    async execute(): Promise<Tenant[]> {
        const tenants = await this.tenantRepository.getAllTenants();

        if(!tenants) throw new Error("Tenant list is not available");

        return tenants;
    }
}