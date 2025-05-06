import { DIIClubProps } from "../../../../domain/entities/property-models/componentsProperties";
import "./../DisplayItemInfo.css";

function DisplayItemInfoClub({object}:DIIClubProps) {

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
                <label htmlFor="clubName">Club Name</label>
                <input 
                    id="clubName" 
                    type="text"
                    value={object.name} 
                />
                <label htmlFor="tenantEntity">Tenant Owner</label>
                <input 
                    id="tenantEntity" 
                    type="text"
                    value={object.tenantEntityName}
                    />
                <label htmlFor="address">Club Address</label>
                <input 
                    id="address" 
                    type="text"
                    value={object.address}
                />
                <label htmlFor="email">Club email</label>
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
                <label htmlFor="clubCIF">CIF</label>
                <input
                    id="clubCIF"
                    type="text"
                    value={object.cif}
                />
                <label htmlFor="accountingId">Accounting ID</label>
                <input
                    id="accountingId" 
                    type="text"
                    value={object.accountingId}
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
                    value={object.userManagers}
                />
            </div>
        </form>
    );
}

export default DisplayItemInfoClub;