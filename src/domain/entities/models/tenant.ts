export type Tenant = {
	tenantId: string,
	tenantName: string,
	cif: number,
	address: string,
	phone: number,
	email: string,
	remark: string,
	micronId: string
	numberOfClubs: number
}

export type TenantInfoDisplay = {
	tenantId: string;
	name: string;
	cif: string;
	phone: string;
	email: string;
	clubsCount: number;
}

export type PotentialTenant = {
	tenantId: string,
	name: string
}