import { Club } from "../../../domain/entities/models/club";

export function mapClubToApi(club: Partial<Club>): any {
    return {
      name: club.clubName,
      cif: club.cif,
      address: club.address,
      phone: club.phone,
      email: club.email,
      remark: club.remark,
      micronId: club.micronId,
      acountingId: club.accountingId,
      tenantName: club.tenantName
    };
}