import { TenantRepository } from "../../../domain/ports/TenantRepository";
import { Tenant } from "../../../domain/entities/models/tenant";

export class TenantRepositoryHttp implements TenantRepository {
    private BASEURL = "https://api.example.com/";

    async findTenantByUuid(tenantUuid: string): Promise<Tenant | null> {
        const response = await fetch(`${this.BASEURL}/${tenantUuid}`);
        if (!response.ok) return null;
        return response.json();
    }

    async getAllTenants(): Promise<Tenant[]> {
        const response = await fetch(this.BASEURL);
        return response.json();
    }

    async addTenant(tenant: Tenant): Promise<void> {
        const response = await fetch(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(tenant),
                headers: { "Content-Type": "application/json" }
            }
        );
        if (!response.ok) throw new Error("Error adding tenant");
    }

    async modifyTenant(tenant: Tenant): Promise<void> {
        const response = await fetch(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(tenant),
                headers: { "Content-Type": "application/json" }
            }
        );
        if (!response.ok) throw new Error("Error when modifying the tenant");
    }

    async deleteTenant(uuid: string): Promise<void> {
        const response = await fetch(`${this.BASEURL}/${uuid}`);
        if (!response.ok) throw new Error("Error deleting tenant");
    }
}