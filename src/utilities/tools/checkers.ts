import { DataTableValue } from "primereact/datatable";

export function getEntityId(rowData:DataTableValue) {
    if ("tenantId" in rowData) return rowData.tenantId;
    if ("clubId" in rowData) return rowData.clubId;
    if ("userManagerId" in rowData) return rowData.userManagerId;
    if ("machineId" in rowData) return rowData.machineId;
}

//  Validations:
export function isValidEmail(email:string):boolean {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9-]{2,63}\.[a-zA-Z]{2,10}$/;
    return emailRegex.test(email);
}
