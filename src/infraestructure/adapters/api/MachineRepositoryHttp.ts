import { MachineRepository } from "../../../domain/ports/MachineRepository";
import { Machine, MachineApi } from "../../../domain/entities/models/machine";
import { API_PREFIX, BASE_URL_SERVER, PATH_PREFIX } from "../../../utilities/defines/api/api-routes";
import { mapMachineToApi } from "../../mappers/ToApi/MachineMapperToApi";
import { authHandler } from "../Auth/AuthHandler";
import { MachineApiResponse } from "../../../domain/entities/api-models/apiResponse";

export class MachineRepositoryHttp implements MachineRepository{
    private BASEURL = BASE_URL_SERVER + API_PREFIX + PATH_PREFIX.machinesPath;

    async findMachineByUuid(machineUuid: string): Promise<MachineApi | null> {
        const response = await authHandler(`${this.BASEURL}/${machineUuid}`, {credentials: "include"});
        return await response;
    }

    async getAllMachines(page:number): Promise<MachineApiResponse> {
        const json = await authHandler(`${this.BASEURL}?page=${page}`, {credentials: "include"});
        return json;
    }

    async addMachine(machine: Omit<Machine, "machineId" | "state">): Promise<void> {
        const body = mapMachineToApi(machine);
        const response = await authHandler(
            this.BASEURL,
            {
                method: "POST",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            }
        );
        return response;
    }

    async modifyMachine(machine: Omit<Machine, "state">): Promise<void> {
        const body = mapMachineToApi(machine);
        const response = await authHandler(
            this.BASEURL+`/${machine.machineId}`,
            {
                method: "PUT",
                body: JSON.stringify(body),
                headers: { "Content-Type": "application/json" },
                credentials: "include"
            }
        );
        return response;
    }

    async deleteMachine(uuid: string): Promise<void> {
        const response = await authHandler(
            `${this.BASEURL}/${uuid}`,
            {
                method: "DELETE",
                credentials: "include"
            });
        return response;
    }
}