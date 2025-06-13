//import styles from "./SelectTenantOptions.modules.css"
import { useEffect, useState } from "react";
import { PotentialTenant } from "../../../domain/entities/models/tenant";
import { TenantRepositoryHttp } from "../../../infraestructure/adapters/api/TenantRepositoryHttp";
import { GetPotentialTenants } from "../../../application/usecases/TenantUseCases/GetPotentialTenants";
import { SelectTenantOptionProps } from "../../../domain/entities/property-models/componentsProperties";

const tenantRepo = new TenantRepositoryHttp();
const getPotentialTenant = new GetPotentialTenants(tenantRepo);

function SelectTenantOptions({onSelectTenant, tenantName, tenantUuid}: SelectTenantOptionProps) {
    // States:
    const [ potentialTenants, setPotentialTenants ] = useState<PotentialTenant[]| null>(null);
    const [ selectOpen, setSelectOpen ] = useState(false);
    
    // Handlers
    async function fetchTenants() {
        const tenantOptions = await getPotentialTenant.execute();
        setPotentialTenants(tenantOptions);
    } 

    function onClickHandler() {
        if(!selectOpen) {
            fetchTenants();
            setSelectOpen(true);
        }
    }

    useEffect(
        ()=>{
            fetchTenants();
        },[]
    );

    return(
        <>
            <label htmlFor="tenants">Choose a tenant:</label>
            <br/>
            <select name="tenantId" id="tenants" onClick={onClickHandler} onBlur={()=> setSelectOpen(false)} onChange={onSelectTenant}>
                <option key={tenantUuid} value={tenantUuid}>{tenantName}</option>
                {
                    potentialTenants !== null?
                    potentialTenants
                        .filter(t => t.tenantId !== tenantUuid)
                        .map(
                            (t) => <option key={t.tenantId} value={t.tenantId}>{t.name}</option>
                    )
                    : ""
                }
            </select>
        </>
    );
}

export default SelectTenantOptions;