import React, { useState } from "react";
import { CreateMachine } from "../../../../application/usecases/MachineUseCases/CreateMachine";
import { ModalProps } from "../../../../domain/entities/property-models/componentsProperties";
import { MachineRepositoryHttp } from "../../../../infraestructure/adapters/api/MachineRepositoryHttp";
import "./../Modal.css";
import { Machine } from "../../../../domain/entities/models/machine";
import SelectClubOptions from "../../SelectClubOptions/SelectClubOptions";

const machineRepository = new MachineRepositoryHttp();
const createMachine = new CreateMachine(machineRepository);

function MachineRegisterModal({ isOpen, onClose }: ModalProps) {
    // States: 
    const [machineFormData, setMachineFormData] = useState<Omit<Machine, "machineId" | "state">>({
        machineCode: "",
        micronId: "",
        smartFridgeld: "",
        smartFridgePassword: "",
        terminalId: 0,
        tnaSerialNumber: "",
        rustdeskId: "",
        rustdeskPass: "",
        clubId: "",
    });

    // Handlers:
    function changeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        const mappedName = name === "clubEntityId"? "clubId":name;
        setMachineFormData({
            ...machineFormData,
            [mappedName]: mappedName === "terminalId" ? Number(value) : value
        });
    }

    async function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        try {
            await createMachine.execute(machineFormData);
            alert("Machine successfully registered!");
            onClose();
            window.location.reload();
        } catch {
            alert("Error registering machine");
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Register machine</h2>
                <form onSubmit={submitHandler} className="form">
                    <input
                        name="machineCode"
                        value={machineFormData.machineCode}
                        onChange={changeHandler}
                        placeholder="Machine code"
                        type="text"
                        required
                    />
                    <input
                        name="micronId"
                        value={machineFormData.micronId}
                        onChange={changeHandler}
                        placeholder="Micron ID"
                        type="text"
                        required
                    />
                    <input
                        name="smartFridgeld"
                        value={machineFormData.smartFridgeld}
                        onChange={changeHandler}
                        placeholder="Smart Fridgeld"
                        type="text"
                        required
                    />
                    <input
                        name="smartFridgePassword"
                        value={machineFormData.smartFridgePassword}
                        onChange={changeHandler}
                        placeholder="Smart Fridgeld Password"
                        type="text"
                        required
                    />
                    <input
                        name="terminalId"
                        value={machineFormData.terminalId}
                        onChange={changeHandler}
                        placeholder="Terminal ID"
                        type="number"
                        required
                    />
                    <input
                        name="tnaSerialNumber"
                        value={machineFormData.tnaSerialNumber}
                        onChange={changeHandler}
                        placeholder="Terminal Serial Number"
                        type="text"
                        required
                    />
                    <input
                        name="rustdeskId"
                        value={machineFormData.rustdeskId}
                        onChange={changeHandler}
                        placeholder="RustDesk ID"
                        type="text"
                        required
                    />
                    <input
                        name="rustdeskPass"
                        value={machineFormData.rustdeskPass}
                        onChange={changeHandler}
                        placeholder="RustDesk password"
                        type="text"
                        required
                    />
                    <br />
                    <SelectClubOptions onSelectClub={changeHandler}/>
                    <br />
                    <button type="submit">Registrar</button>
                    <button type="button" onClick={onClose}>Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export default MachineRegisterModal;