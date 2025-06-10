import { MachineApiResponse } from "../entities/api-models/apiResponse";
import { Machine, MachineApi} from "../entities/models/machine";

export interface MachineRepository {
    getAllMachines(page:number) : Promise<MachineApiResponse>;
    findMachineByUuid( machineUuid : string ) : Promise<MachineApi | null >;
    addMachine( machine : Omit<Machine, "machineId" | "state"> ) : Promise<void>;
    modifyMachine( machine : Omit<Machine, "state">) : Promise<void>;
    deleteMachine( uuid : string ) : Promise<void>;
}