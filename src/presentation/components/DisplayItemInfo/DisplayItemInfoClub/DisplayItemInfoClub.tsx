import "./../DisplayItemInfo.css";

function DisplayItemInfoClub() {

    return (
        <form className="frm-cntnr">
            <div className="frm-dv">
                <label htmlFor="clubName">Club Name</label>
                <input id="clubName" type="text" />
                <label htmlFor="tenantEntity">Tenant Owner</label>
                <input id="tenantEntity" type="text" />
                <label htmlFor="address">Club Address</label>
                <input id="address" type="text" />
                <label htmlFor="email">Club email</label>
                <input id="email" type="text" />
                <label htmlFor="remark">Remark</label>
                <input id="remark" type="text" />
            </div>
            <div className="frm-dv">
                <label htmlFor="clubCIF">CIF</label>
                <input id="clubCIF" type="text" />
                <label htmlFor="accountingId">Accounting ID</label>
                <input id="accountingId" type="text" />
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

export default DisplayItemInfoClub;