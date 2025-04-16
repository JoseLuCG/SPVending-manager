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

export type TenantList = Tenant[];