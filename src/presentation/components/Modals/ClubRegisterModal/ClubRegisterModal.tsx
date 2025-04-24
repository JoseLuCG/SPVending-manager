import "./../Modal.css"
import React, { useState } from "react";
import { ModalProps } from "../../../../domain/entities/property-models/componentsProperties";
import { Club } from "../../../../domain/entities/models/club";
import { ClubRepositoryHttp } from "../../../../infraestructure/adapters/api/ClubRepositoryHttp";
import { CreateClub } from "../../../../application/usecases/ClubUseCases/CreateClub";
import SelectTenantOptions from "../../SelectTenantOptions/SelectTenantOptions";


const clubRepo = new ClubRepositoryHttp();
const createClub = new CreateClub(clubRepo);

function ClubRegisterModal({ isOpen, onClose }: ModalProps) {
    // States:
    const [ clubFormData, setClubFormData ] = useState<Omit<Club,"clubId"|"numberOfMachines">>({
        clubName: "",
        cif: 0,
        address: "",
        phone: 0,
        email: "",
        remark: "",
        micronId: "",
        accountingId: "",
        tenantId: "",
    });

    // Handlers
    function changeHandler( event:React.ChangeEvent<HTMLInputElement> ) {
        const { name , value } = event.target;
        setClubFormData({
            ...clubFormData,
            [name]: name === "cif"|| name === "phone"? Number(value) : value
        });
    }

    async function submitHandler(event:React.FormEvent) {
        event.preventDefault();
        try {
            await createClub.execute(clubFormData);
            alert("Club successfully registered!");
            onClose();
        }catch {
            alert("Error registering club");
        }
    }

    if (!isOpen) return null;

    return(
        <div className="modal-overlay">
            <div className="modal">
                <h2>Registrar club</h2>
                <form onSubmit={submitHandler} className="form">
                    <input name="clubName" placeholder="Nombre" value={clubFormData.clubName} onChange={changeHandler} required />
                    <input name="cif" placeholder="CIF" value={clubFormData.cif || ""} onChange={changeHandler} type="number" required />
                    <input name="address" placeholder="Dirección" value={clubFormData.address} onChange={changeHandler} required />
                    <input name="phone" placeholder="Teléfono" value={clubFormData.phone || ""} onChange={changeHandler} type="number" required />
                    <input name="email" placeholder="Email" value={clubFormData.email} onChange={changeHandler} type="email" required />
                    <input name="remark" placeholder="Observaciones" value={clubFormData.remark} onChange={changeHandler} />
                    <input name="micronId" placeholder="Micron ID" value={clubFormData.micronId} onChange={changeHandler} required />
                    <input name="accountingId" placeholder="Cuenta ID" value={clubFormData.accountingId} onChange={changeHandler} required />
                    <SelectTenantOptions/>
                    <br/>

                    <button type="submit">Registrar</button>
                    <button type="button" onClick={onClose}>Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export default ClubRegisterModal;