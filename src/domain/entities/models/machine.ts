export type Machine = {
    machineId : string,
    machineCode: string,
    micronId: string,
    smartFridgeld: string,
    smartFridgePassword : string,
    terminalId: number,
    tnaSerialNumber: string
    rustdeskId: string,
    rustdeskPass: string,
    clubName: string,
    state: boolean
}

export type MachineInfoDisplay = {
    machineCode: string,
    clubName: string,
    tenantName: string,
    attendant: string,
    state: string
}