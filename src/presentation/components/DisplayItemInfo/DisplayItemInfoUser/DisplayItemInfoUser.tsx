import { DIIUserProps } from "../../../../domain/entities/property-models/componentsProperties";
import "./../DisplayItemInfo.css";

function DisplayItemInfoUser({object}:DIIUserProps) {

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
                <label htmlFor="username">User Name</label>
                <input 
                    id="username" 
                    type="text"
                    value={object.username}
                />
                <label htmlFor="password">Password</label>
                <input 
                    id="password" 
                    type="text"
                    value={object.password}
                />
                <label htmlFor="adminFor">Admin For</label>
                <input 
                    id="adminFor" 
                    type="text"
                    value={object.clubEntityName?object.clubEntityName:object.tenantEntityName}
                />
            </div>
            <div className="frm-dv">
                <label htmlFor="micronId">Micron ID</label>
                <input 
                    id="micronId" 
                    type="text"
                    value={object.micronId}
                />
                <label htmlFor="micronUser">Micron User</label>
                <input 
                    id="micronUser" 
                    type="text"
                    value={object.micronUser}
                />
                <label htmlFor="micronPass">Micron Pass</label>
                <input 
                    id="micronPass" 
                    type="text" 
                    value={object.micronPass}
                />
            </div>
        </form>
    );
}

export default DisplayItemInfoUser;