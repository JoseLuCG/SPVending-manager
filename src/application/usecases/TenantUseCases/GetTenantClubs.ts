import { ClubOfTenant } from "../../../domain/entities/models/club";
import { TenantRepository } from "../../../domain/ports/TenantRepository";

export class GetTenantClubs {
    constructor( private tenantRepository: TenantRepository) {}

    async execute(tenantUuid: string): Promise<ClubOfTenant[]> {
        const tennatClubs = await this.tenantRepository.getTenantClubs(tenantUuid);
        return tennatClubs;
    }
}