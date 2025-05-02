import "./../DisplayItemInfo.css";

function DisplayItemInfoTenant() {

    return (
        <form className="frm-cntnr">
            <div className="frm-dv">
                <label htmlFor="tenantName">Tenant Name</label>
                <input id="tenantName" type="text" />
                <label htmlFor="address">Tenant Address</label>
                <input id="address" type="text" />
                <label htmlFor="email">Tenant email</label>
                <input id="email" type="text" />
                <label htmlFor="remark">Remark</label>
                <input id="remark" type="text" />
            </div>
            <div className="frm-dv">
                <label htmlFor="tenantCIF">CIF</label>
                <input id="tenantCIF" type="text" />
                <label htmlFor="phone">Phone</label>
                <input id="phone" type="text" />
                <label htmlFor="micronId">Micron ID</label>
                <input id="micronId" type="text" />
                <label htmlFor="managers">Managers</label>
                <input id="managers" type="text" />
            </div>
        </form>
    );
}

export default DisplayItemInfoTenant;