import { DIITenantProps } from "../../../../domain/entities/property-models/componentsProperties";
import "./../DisplayItemInfo.css";

function DisplayItemInfoTenant({object}:DIITenantProps) {

    if (!object) {
        return(
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <form className="frm-cntnr">
            <div className="frm-dv">
                <label htmlFor="tenantName">Tenant Name</label>
                <input 
                    id="tenantName" 
                    type="text" 
                    value={object.name} 
                />
                <label htmlFor="address">Tenant Address</label>
                <input 
                    id="address" 
                    type="text" 
                    value={object.address}    
                />
                <label htmlFor="email">Tenant email</label>
                <input 
                    id="email" 
                    type="text"
                    value={object.email} 
                />
                <label htmlFor="remark">Remark</label>
                <input 
                    id="remark" 
                    type="text"
                    value={object.remark} 
                />
            </div>
            <div className="frm-dv">
                <label htmlFor="tenantCIF">CIF</label>
                <input 
                    id="tenantCIF" 
                    type="text" 
                    value={object.cif}
                />
                <label htmlFor="phone">Phone</label>
                <input 
                    id="phone" 
                    type="text"
                    value={object.phone}
                />
                <label htmlFor="micronId">Micron ID</label>
                <input 
                    id="micronId" 
                    type="text"
                    value={object.micronId}
                />
                <label htmlFor="managers">Managers</label>
                <input 
                    id="managers" 
                    type="text"
                    value={object.managers}
                />
            </div>
        </form>
    );
}

export default DisplayItemInfoTenant;