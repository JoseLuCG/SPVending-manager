import { useState } from "react";
import { DIITenantProps } from "../../../../domain/entities/property-models/componentsProperties";
import "./../DisplayItemInfo.css";
import { Tenant } from "../../../../domain/entities/models/tenant";
import { TenantRepositoryHttp } from "../../../../infraestructure/adapters/api/TenantRepositoryHttp";
import { ModifyTenant } from "../../../../application/usecases/TenantUseCases/ModifyTenant";

const tenantRepo = new TenantRepositoryHttp();
const modifyUser = new ModifyTenant(tenantRepo);

function DisplayItemInfoTenant({ object }: DIITenantProps) {
    // States:
    const [ isDisabled, setIsDisabled ] = useState(true);
    const [ tenantForm, setTenantForm ] = useState<Omit<Tenant,"tenantId"|"numberOfClubs">>({
        tenantName: "",
        cif: 0,
        address: "",
        phone: 0,
        email: "",
        remark: "",
        micronId: ""
    });

    // Handlers:
    function onClickHandler() {
        setIsDisabled(previous => !previous);
        // TODO: Implement support for local storage to save data that has not been modified by the user
    }

    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setTenantForm({
            ...tenantForm,
            [name]: name === "cif" || name === "phone" ? Number(value) : value
        });
    }

    async function submitHandler(event:React.FormEvent) {
        event.preventDefault();
        try {
            // ? Question: Can managers be modified in the tenant tab?
            console.log(tenantForm);
            console.log(object);
            
            
            //await modifyUser.execute(tenantForm);
            //alert("Tenant successfully modified!");
        } catch (error) {
            console.error(error);
            alert("An error has occurred")
        }
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
            <div className="editButtonContainer">
                <button onClick={onClickHandler}>Eddit</button>
            </div>
            <form className="frm-cntnr" onSubmit={submitHandler}>
                <div className="frm-dv">
                    <label htmlFor="tenantName">Tenant Name</label>
                    <input
                        id="tenantName"
                        name="tenantName"
                        type="text"
                        value={isDisabled? object.name: tenantForm.tenantName}
                        disabled={isDisabled}
                        placeholder={isDisabled?"":object.name}
                        onChange={changeHandler}
                    />
                    <label htmlFor="address">Tenant Address</label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        value={isDisabled?object.address: tenantForm.address}
                        disabled={isDisabled}
                        placeholder={isDisabled?"":object.address}
                        onChange={changeHandler}
                    />
                    <label htmlFor="email">Tenant email</label>
                    <input
                        id="email"
                        name="email"
                        type="text"
                        value={isDisabled?object.email: tenantForm.email}
                        disabled={isDisabled}
                        placeholder={isDisabled?"":object.email}
                        onChange={changeHandler}
                    />
                    <label htmlFor="remark">Remark</label>
                    <input
                        id="remark"
                        name="remark"
                        type="text"
                        value={isDisabled?object.remark:tenantForm.remark}
                        disabled={isDisabled}
                        placeholder={isDisabled?"":object.remark}
                        onChange={changeHandler}
                    />
                </div>
                <div className="frm-dv">
                    <label htmlFor="tenantCIF">CIF</label>
                    <input
                        id="tenantCIF"
                        name="cif"
                        type="text"
                        value={isDisabled?object.cif:tenantForm.cif}
                        disabled={isDisabled}
                        placeholder={isDisabled?"":object.cif}
                        onChange={changeHandler}
                    />
                    <label htmlFor="phone">Phone</label>
                    <input
                        id="phone"
                        name="phone"
                        type="phone"
                        value={isDisabled?object.phone: tenantForm.phone}
                        disabled={isDisabled}
                        placeholder={isDisabled?"":object.phone}
                        onChange={changeHandler}
                    />
                    <label htmlFor="micronId">Micron ID</label>
                    <input
                        id="micronId"
                        type="text"
                        value={isDisabled?object.micronId:tenantForm.micronId}
                        disabled={isDisabled}
                        placeholder={isDisabled?"":object.micronId}
                        onChange={changeHandler}
                    />
                    <label htmlFor="managers">Managers</label>
                    <input
                        id="managers"
                        type="text"
                        value={object.managers}
                        disabled
                    />
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default DisplayItemInfoTenant;