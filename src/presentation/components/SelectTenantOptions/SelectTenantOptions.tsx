import styles from "./SelectTenantOptions.module.css"
import { useEffect, useState } from "react";
import { PotentialTenant } from "../../../domain/entities/models/tenant";
import { TenantRepositoryHttp } from "../../../infraestructure/adapters/api/TenantRepositoryHttp";
import { GetPotentialTenants } from "../../../application/usecases/TenantUseCases/GetPotentialTenants";
import { SelectTenantOptionProps } from "../../../domain/entities/property-models/componentsProperties";

const tenantRepo = new TenantRepositoryHttp();
const getPotentialTenant = new GetPotentialTenants(tenantRepo);

function SelectTenantOptions({onSelectTenant, tenantName, tenantUuid}: SelectTenantOptionProps) {
    // States:
    const [ potentialTenants, setPotentialTenants ] = useState<PotentialTenant[]>([]);
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
        <select className={styles.select} name="tenantId" id="tenants" onClick={onClickHandler} onBlur={()=> setSelectOpen(false)} onChange={onSelectTenant}>
            <option key={tenantUuid} value={tenantUuid} className={styles.option}>{tenantName}</option>
            {
                potentialTenants.length > 0?
                potentialTenants
                    .filter(t => t.tenantId !== tenantUuid)
                    .map(
                        (t) => <option key={t.tenantId} value={t.tenantId} className={styles.option}>{t.name}</option>
                )
                : ""
            }
        </select>

    );
}

export default SelectTenantOptions;