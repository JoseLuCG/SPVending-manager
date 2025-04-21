import { MachineRepository } from "../../../domain/ports/MachineRepository";
import { Machine } from "../../../domain/entities/models/machine";

export class MachineRepositoryHttp implements MachineRepository{
    private BASEURL = "https://api.example.com/";

    async findMachineByUuid(machineUuid: string): Promise<Machine | null> {
        const response = await fetch(`${this.BASEURL}/${machineUuid}`);
        if (!response.ok) return null;
        return response.json();
    }

    async getAllMachines(): Promise<Machine[]> {
        const response = await fetch(this.BASEURL);
        return response.json();
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