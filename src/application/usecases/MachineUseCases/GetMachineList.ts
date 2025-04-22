import { MachineRepository } from "../../../domain/ports/MachineRepository";
import { Machine } from "../../../domain/entities/models/machine";

export class GetMachineList {
    constructor( private machineRepository : MachineRepository ) {};

    async execute() : Promise<Machine[]> {
        const machines = await this.machineRepository.getAllMachines();

        if(!machines) throw new Error("Machine list is not available");

        return machines;
    }
}