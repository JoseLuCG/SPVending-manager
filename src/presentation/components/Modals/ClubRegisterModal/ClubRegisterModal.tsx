import styles from "./../Modal.module.css"
import React, { useState } from "react";
import { ModalProps } from "../../../../domain/entities/property-models/componentsProperties";
import { Club } from "../../../../domain/entities/models/club";
import { ClubRepositoryHttp } from "../../../../infraestructure/adapters/api/ClubRepositoryHttp";
import { CreateClub } from "../../../../application/usecases/ClubUseCases/CreateClub";
import SelectTenantOptions from "../../SelectTenantOptions/SelectTenantOptions";
import { isValidEmail } from "../../../../utilities/tools/checkers";


const clubRepo = new ClubRepositoryHttp();
const createClub = new CreateClub(clubRepo);

function ClubRegisterModal({ isOpen, onClose, toastRef }: ModalProps) {
    // States:
    const [clubFormData, setClubFormData] = useState<Omit<Club, "clubId" | "numberOfMachines">>({
        clubName: "",
        cif: "",
        address: "",
        phone: 0,
        email: "",
        remark: "",
        micronId: "",
        accountingId: "",
        tenantId: "",
    });

    const showSuccess = ()=> {
        toastRef.current?.show({ severity: 'success', summary: 'Success', detail: 'CLub created successfully.' });
    }

    const showError = () => {
        toastRef.current?.show({severity:'error', summary: 'Error', detail:'Error creating the club', life: 3000});
    }

    const showEmailError = () => {
        toastRef.current?.show({ severity: 'error', summary: 'Error', detail: 'Invalid email format', life: 3000 });
    }

    // Handlers
    function changeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setClubFormData({
            ...clubFormData,
            [name]: name === "phone" ? Number(value) : value
        });
    }

    async function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        if(!isValidEmail(clubFormData.email)) {
            showEmailError();
            return;
        }
        try {
            const fetchData = await createClub.execute(clubFormData);
            console.log(fetchData);
            showSuccess();
            onClose();
            window.location.reload();
        } catch {
            showError();
        }
    }

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <form onSubmit={submitHandler} className={styles.form}>
                    <h2 className={styles.h2}>REGISTER CLUB</h2>
                    <div className={styles.inputPack}>
                        <label htmlFor="">Club Name: </label>
                        <input name="clubName" placeholder="Nombre" value={clubFormData.clubName} onChange={changeHandler} required />
                    </div>
                    <div className={styles.inputPack}>
                        <label htmlFor="">Club CIF: </label>
                        <input name="cif" placeholder="CIF" value={clubFormData.cif || ""} onChange={changeHandler} type="text" required />
                    </div>
                    <div className={styles.inputPack}>
                        <label htmlFor="">Club Address: </label>
                        <input name="address" placeholder="Dirección" value={clubFormData.address} onChange={changeHandler} required />
                    </div>
                    <div className={styles.inputPack}>
                        <label htmlFor="">Club Phone: </label>
                        <input name="phone" placeholder="Teléfono" value={clubFormData.phone || ""} onChange={changeHandler} type="tel" pattern="^\+?\d+$" required />
                    </div>
                    <div className={styles.inputPack}>
                        <label htmlFor="">Club email: </label>
                        <input name="email" placeholder="Email" value={clubFormData.email.toLowerCase()} onChange={changeHandler} type="email" pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}" required />
                    </div>
                    <div className={styles.inputPack}>
                        <label htmlFor="">Club Remark: </label>
                        <input name="remark" placeholder="Observaciones" value={clubFormData.remark} onChange={changeHandler} />
                    </div>
                    <div className={styles.inputPack}>
                        <label htmlFor="">Club Micron ID</label>
                        <input name="micronId" placeholder="Micron ID" value={clubFormData.micronId} onChange={changeHandler} required />
                    </div>
                    <div className={styles.inputPack}>
                        <label htmlFor="">Club Accounting Id</label>
                        <input name="accountingId" placeholder="Cuenta ID" value={clubFormData.accountingId} onChange={changeHandler} required />
                    </div>
                    <div className={styles.inputPack}>
                        <SelectTenantOptions onSelectTenant={changeHandler} />
                    </div>
                    <div className={styles.buttonsContainer}>
                    <button className={styles.button} type="submit">Registrar</button>
                    <button className={styles.button} type="button" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default ClubRegisterModal;