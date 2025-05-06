import { Machine, MachineApi, MachineInfoDisplay } from "../entities/models/machine";

export interface MachineRepository {
    getAllMachines() : Promise<MachineInfoDisplay[]>;
    findMachineByUuid( machineUuid : string ) : Promise<MachineApi | null >;
    addMachine( machine : Machine ) : Promise<void>;
    modifyMachine( machine : Machine) : Promise<void>;
    deleteMachine( uuid : string ) : Promise<void>;
}