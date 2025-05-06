import { DIIMachineProps } from "../../../../domain/entities/property-models/componentsProperties";
import "./../DisplayItemInfo.css";

function DisplayItemInfoMachine({object}:DIIMachineProps) {

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
                <label htmlFor="machineCode">Machine Code</label>
                <input 
                    id="machineCode" 
                    type="text"
                    value={object.code}
                />
                <label htmlFor="clubName">Club Name</label>
                <input 
                    id="clubName" 
                    type="text"
                    value={object.clubName}
                />
                <label htmlFor="smartFridgeId">Smart Fridge Id</label>
                <input 
                    id="smartFridgeId" 
                    type="text"
                    value={object.smartFridgeId}
                />
                <label htmlFor="terminalId">Terminal ID</label>
                <input 
                    id="terminalId" 
                    type="text"
                    value={object.terminalId}
                />
            </div>
            <div className="frm-dv">
                <label htmlFor="rustdeskId">Rust Desk ID</label>
                <input 
                    id="rustdeskId" 
                    type="text"
                    value={object.rustdeskId}
                />
                <label htmlFor="rustdeskPass">Rust Desk Password</label>
                <input 
                    id="rustdeskPass" 
                    type="text"
                    value={object.rustdeskPass}
                />
                <label htmlFor="smartFridgePassword">Smart Fridge Password</label>
                <input 
                    id="smartFridgePassword" 
                    type="text"
                    value={object.smartFridgePassword}
                />
                <label htmlFor="toaSerialNumber">Terminal Serial Number</label>
                <input 
                    id="toaSerialNumber" 
                    type="text"
                    value={object.toaSerialNumber} 
                />
            </div>
        </form>
    );
}

export default DisplayItemInfoMachine;