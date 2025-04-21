import { TenantRepository } from "../../../domain/ports/TenantRepository";
import { Tenant } from "../../../domain/entities/models/tenant";

export class CreateTenant {
    constructor( private tenantRepository: TenantRepository ){};

    async execute( tenant : Tenant ): Promise<void> {
        return this.tenantRepository.addTenant(tenant);
    }
}