import { MachineRepository } from "../../../domain/ports/MachineRepository";
import { MachineApiResponse } from "../../../domain/entities/api-models/apiResponse";

export class GetMachineList {
    constructor( private machineRepository : MachineRepository ) {};

    async execute(page:number) : Promise<MachineApiResponse> {
        const machines = await this.machineRepository.getAllMachines(page);

        if(!machines) throw new Error("Machine list is not available");

        return machines;
    }
}