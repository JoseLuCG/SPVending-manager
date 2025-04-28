import { MachineRepository } from "../../../domain/ports/MachineRepository";
import { Machine, MachineInfoDisplay } from "../../../domain/entities/models/machine";
import { API_PREFIX, BASE_URL_SERVER, PATH_PREFIX } from "../../../utilities/defines/api/api-routes";
import { mapMachineFromApi } from "../../mappers/FromApi/MachineMapper";

export class MachineRepositoryHttp implements MachineRepository{
    private BASEURL = BASE_URL_SERVER + API_PREFIX + PATH_PREFIX.machinesPath;

    async findMachineByUuid(machineUuid: string): Promise<Machine | null> {
        const response = await fetch(`${this.BASEURL}/${machineUuid}`);
        if (!response.ok) return null;
        return response.json();
    }

    async getAllMachines(): Promise<MachineInfoDisplay[]> {
        const response = await fetch(this.BASEURL);
        const json = await response.json();
        return mapMachineFromApi(json);
    }

    async addMachine(machine: Machine): Promise<void> {
        const response = await fetch(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(machine),
                headers: { "Content-Type": "application/json" }
            }
        );
        if (!response.ok) throw new Error("Error adding user");
    }

    async modifyMachine(machine: Machine): Promise<void> {
        const response = await fetch(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(machine),
                headers: { "Content-Type": "application/json" }
            }
        );
        if (!response.ok) throw new Error("Error when modifying the machine");
    }

    async deleteMachine(uuid: string): Promise<void> {
        const response = await fetch(`${this.BASEURL}/${uuid}`);
        if (!response.ok) throw new Error("Error deleting machine");
    }
}