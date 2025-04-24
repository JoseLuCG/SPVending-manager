import { PotentialTenant, Tenant, TenantInfoDisplay } from "../entities/models/tenant";

export interface TenantRepository {
    getAllTenants() : Promise<TenantInfoDisplay[]>;
    findTenantByUuid( tenantUuid : string ) : Promise<Tenant | null >;
    addTenant( tenant : Tenant ) : Promise<void>;
    modifyTenant( tenant : Tenant) : Promise<void>;
    deleteTenant( uuid : string ) : Promise<void>;
    getPotentialTenants() : Promise<PotentialTenant[]>;
}