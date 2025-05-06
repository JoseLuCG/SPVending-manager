import { useState } from "react";
import { DIITenantProps } from "../../../../domain/entities/property-models/componentsProperties";
import "./../DisplayItemInfo.css";

function DisplayItemInfoTenant({ object }: DIITenantProps) {
    // States:
    const [ isDisabled, setIsDisabled ] = useState(true); 

    // Handlers:
    function onClickHandler(){
        setIsDisabled(previous => !previous);
    }


    if (!object) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
            <div>
                <button onClick={onClickHandler}>Eddit</button>
            </div>
            <form className="frm-cntnr">
                <div className="frm-dv">
                    <label htmlFor="tenantName">Tenant Name</label>
                    <input
                        id="tenantName"
                        type="text"
                        value={object.name}
                        disabled={isDisabled}
                    />
                    <label htmlFor="address">Tenant Address</label>
                    <input
                        id="address"
                        type="text"
                        value={object.address}
                        disabled={isDisabled}
                    />
                    <label htmlFor="email">Tenant email</label>
                    <input
                        id="email"
                        type="text"
                        value={object.email}
                        disabled={isDisabled}
                    />
                    <label htmlFor="remark">Remark</label>
                    <input
                        id="remark"
                        type="text"
                        value={object.remark}
                        disabled={isDisabled}
                    />
                </div>
                <div className="frm-dv">
                    <label htmlFor="tenantCIF">CIF</label>
                    <input
                        id="tenantCIF"
                        type="text"
                        value={object.cif}
                        disabled={isDisabled}
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        type="text"
                        value={object.phone}
                        disabled={isDisabled}
                    />
                    <label htmlFor="micronId">Micron ID</label>
                    <input
                        id="micronId"
                        type="text"
                        value={object.micronId}
                        disabled={isDisabled}
                    />
                    <label htmlFor="managers">Managers</label>
                    <input
                        id="managers"
                        type="text"
                        value={object.managers}
                        disabled={isDisabled}
                    />
                </div>
            </form>
        </>
    );
}

export default DisplayItemInfoTenant;