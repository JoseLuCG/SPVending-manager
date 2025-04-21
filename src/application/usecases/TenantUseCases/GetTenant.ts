import { TenantRepository } from "../../../domain/ports/TenantRepository";
import { Tenant } from "../../../domain/entities/models/tenant";

export class GetTenant {
    constructor( private tenantRepository: TenantRepository ){};

    async execute( tenantUuid : string ): Promise<Tenant> {
        const tenant = await this.tenantRepository.findTenantByUuid(tenantUuid);

        if(!tenant) throw new Error("Tenant not found");

        return tenant;
    }
}