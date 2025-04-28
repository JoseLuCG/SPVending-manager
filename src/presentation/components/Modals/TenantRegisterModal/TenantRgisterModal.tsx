import "./../Modal.css"
import React, { useState } from "react";
import { CreateTenant } from "../../../../application/usecases/TenantUseCases/CreateTenant";
import { GenericModalProps } from "../../../../domain/entities/property-models/componentsProperties";
import { TenantRepositoryHttp } from "../../../../infraestructure/adapters/api/TenantRepositoryHttp";
import { Tenant } from "../../../../domain/entities/models/tenant";


const tenantRepo = new TenantRepositoryHttp();
const createTenant = new CreateTenant(tenantRepo);

function TenantRegisterModal({ isOpen, onClose }: GenericModalProps) {
    // States:
    const [ tenantFormData, setTenantFormData ] = useState<Omit<Tenant,"tenantId"|"numberOfClubs">>({
        tenantName: "",
        cif: 0,
        address: "",
        phone: 0,
        email: "",
        remark: "",
        micronId: ""
    });

    // Handlers
    function changeHandler( event:React.ChangeEvent<HTMLInputElement> ) {
        const { name , value } = event.target;
        setTenantFormData({
            ...tenantFormData,
            [name]: name === "cif"|| name === "phone"? Number(value) : value
        });
    }

    async function submitHandler(event:React.FormEvent) {
        event.preventDefault();
        try {
            await createTenant.execute(tenantFormData);
            alert("Tenant successfully registered!");
            onClose();
        }catch {
            alert("Error registering tenant");
        }
    }

    if (!isOpen) return null;

    return(
        <div className="modal-overlay">
            <div className="modal">
                <h2>Registrar Tenant</h2>
                <form onSubmit={submitHandler} className="form">
                    <input name="tenantName" placeholder="Nombre" value={tenantFormData.tenantName} onChange={changeHandler} required />
                    <input name="cif" placeholder="CIF" value={tenantFormData.cif || ""} onChange={changeHandler} type="number" required />
                    <input name="address" placeholder="Dirección" value={tenantFormData.address} onChange={changeHandler} required />
                    <input name="phone" placeholder="Teléfono" value={tenantFormData.phone || ""} onChange={changeHandler} type="number" required />
                    <input name="email" placeholder="Email" value={tenantFormData.email} onChange={changeHandler} type="email" required />
                    <input name="remark" placeholder="Observaciones" value={tenantFormData.remark} onChange={changeHandler} />
                    <input name="micronId" placeholder="Micron ID" value={tenantFormData.micronId} onChange={changeHandler} required />

                    <button type="submit">Registrar</button>
                    <button type="button" onClick={onClose}>Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export default TenantRegisterModal;