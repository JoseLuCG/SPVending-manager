import { MachineRepository } from "../../../domain/ports/MachineRepository";
import { MachineInfoDisplay } from "../../../domain/entities/models/machine";
import { MachineApiResponse } from "../../../domain/entities/api-models/apiResponse";

export class GetMachineList {
    constructor( private machineRepository : MachineRepository ) {};

    async execute() : Promise<MachineApiResponse> {
        const machines = await this.machineRepository.getAllMachines();

        if(!machines) throw new Error("Machine list is not available");

        return machines;
    }
}