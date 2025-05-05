import "./../DisplayItemInfo.css";

function DisplayItemInfoMachine() {

    return (
        <form className="frm-cntnr">
            <div className="frm-dv">
                <label htmlFor="machineCode">Machine Code</label>
                <input id="machineCode" type="text" />
                <label htmlFor="clubName">Club Name</label>
                <input id="clubName" type="text" />
                <label htmlFor="smartFridgeId">Smart Fridge Id</label>
                <input id="smartFridgeId" type="text" />
                <label htmlFor="terminalId">Terminal ID</label>
                <input id="terminalId" type="text" />
            </div>
            <div className="frm-dv">
                <label htmlFor="rustdeskId">Rust Desk ID</label>
                <input id="rustdeskId" type="text" />
                <label htmlFor="rustdeskPass">Rust Desk Password</label>
                <input id="rustdeskPass" type="text" />
                <label htmlFor="smartFridgePassword">Smart Fridge Password</label>
                <input id="smartFridgePassword" type="text" />
                <label htmlFor="toaSerialNumber">Terminal Serial Number</label>
                <input id="toaSerialNumber" type="text" />
            </div>
        </form>
    );
}

export default DisplayItemInfoMachine;