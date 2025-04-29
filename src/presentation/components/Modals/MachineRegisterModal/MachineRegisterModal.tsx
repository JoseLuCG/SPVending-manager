import React, { useState } from "react";
import { CreateMachine } from "../../../../application/usecases/MachineUseCases/CreateMachine";
import { ModalProps } from "../../../../domain/entities/property-models/componentsProperties";
import { MachineRepositoryHttp } from "../../../../infraestructure/adapters/api/MachineRepositoryHttp";
import "./../Modal.css";
import { Machine } from "../../../../domain/entities/models/machine";

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
        setMachineFormData({
            ...machineFormData,
            [name]: name === "terminalId" ? Number(value) : value
        });
    }

    async function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        try {
            await createMachine.execute(machineFormData);
            alert("Machine successfully registered!");
            onClose();
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
                    <input name="machineCode" />
                    <input name="micronId" />
                    <input name="smartFridgeld" />
                    <input name="smartFridgePassword" />
                    <input name="terminalId" />
                    <input name="tnaSerialNumber" />
                    <input name="rustdeskId" />
                    <input name="rustdeskPass" />
                    <br />

                    <button type="submit">Registrar</button>
                    <button type="button" onClick={onClose}>Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export default MachineRegisterModal;