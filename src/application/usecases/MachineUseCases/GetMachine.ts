import { MachineRepository } from "../../../domain/ports/MachineRepository";
import { Machine } from "../../../domain/entities/models/machine";

export class GetMachine {
    constructor( private machineRepository : MachineRepository ) {};

    async execute( machineUuid : string ) : Promise<Machine> {
        const machine = await this.machineRepository.findMachineByUuid(machineUuid);

        if(!machine) throw new Error("Machine not found");

        return machine;
    }
}