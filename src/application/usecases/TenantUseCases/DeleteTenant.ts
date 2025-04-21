import { TenantRepository } from "../../../domain/ports/TenantRepository";

export class ModifyTenant {
    constructor( private tenantRepository: TenantRepository ){};

    async execute( uuid : string ): Promise<void> {
        return this.tenantRepository.deleteTenant(uuid);
    }
}