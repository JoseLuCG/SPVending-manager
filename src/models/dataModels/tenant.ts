export type Tenant = {
  tenantName: string,
  cif: number,
  phone: number,
  email: string,
  numberOfClubs: number
}

export type TenantList = Tenant[];