import { RowData } from "../../domain/entities/property-models/genericModels";

export function getEntityId(rowData:RowData) {
    if ("tenantId" in rowData) return rowData.tenantId;
    if ("clubId" in rowData) return rowData.clubId;
    if ("userManagerId" in rowData) rowData.userManagerId;
    if ("machineId" in rowData) rowData.machineId;
}