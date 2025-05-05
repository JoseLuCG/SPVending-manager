import "./../DisplayItemInfo.css";

function DisplayItemInfoUser() {

    return (
        <form className="frm-cntnr">
            <div className="frm-dv">
                <label htmlFor="username">User Name</label>
                <input id="username" type="text" />
                <label htmlFor="password">Password</label>
                <input id="password" type="text" />
                <label htmlFor="adminFor">Admin For</label>
                <input id="adminFor" type="text" />
            </div>
            <div className="frm-dv">
                <label htmlFor="micronId">Micron ID</label>
                <input id="micronId" type="text" />
                <label htmlFor="micronUser">Micron User</label>
                <input id="micronUser" type="text" />
                <label htmlFor="micronPass">Micron Pass</label>
                <input id="micronPass" type="text" />
            </div>
        </form>
    );
}

export default DisplayItemInfoUser;