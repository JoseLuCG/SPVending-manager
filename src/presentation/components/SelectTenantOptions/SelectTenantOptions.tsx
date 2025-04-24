import { useState } from "react";
import { PotentialTenant } from "../../../domain/entities/models/tenant";
import { TenantRepositoryHttp } from "../../../infraestructure/adapters/api/TenantRepositoryHttp";
import { GetPotentialTenants } from "../../../application/usecases/TenantUseCases/GetPotentialTenants";

const tenantRepo = new TenantRepositoryHttp();
const getPotentialTenant = new GetPotentialTenants(tenantRepo);

function SelectTenantOptions() {
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

    return(
        <>
            <label htmlFor="tenants">Choose a tenant:</label>
            <br/>
            <select name="tenants" id="tenants" onClick={onClickHandler} onBlur={()=> setSelectOpen(false)}>
                {
                    potentialTenants.map(
                        (t) => <option key={t.tenantId} value={t.tenantId}>{t.name}</option>
                    )
                }
            </select>
        </>
    );
}

export default SelectTenantOptions;