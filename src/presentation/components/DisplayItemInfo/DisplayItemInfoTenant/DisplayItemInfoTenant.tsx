import { SetStateAction, useEffect, useState } from "react";
import { DIITenantProps } from "../../../../domain/entities/property-models/componentsProperties";
import "./../DisplayItemInfo.css";
import { Tenant, TenantApi } from "../../../../domain/entities/models/tenant";
import { TenantRepositoryHttp } from "../../../../infraestructure/adapters/api/TenantRepositoryHttp";
import { ModifyTenant } from "../../../../application/usecases/TenantUseCases/ModifyTenant";

const tenantRepo = new TenantRepositoryHttp();
const modifyUser = new ModifyTenant(tenantRepo);

function DisplayItemInfoTenant({ object }: DIITenantProps) {
    // States:
    const [isDisabled, setIsDisabled] = useState(true);
    const [tenantForm, setTenantForm] = useState<Omit<Tenant, "numberOfClubs">>({
        tenantName: "",
        cif: 0,
        address: "",
        phone: 0,
        email: "",
        remark: "",
        micronId: "",
        tenantId: ""
    });

    // Functions:
    function itemMapper(item: TenantApi): SetStateAction<Omit<Tenant, "tenantId" | "numberOfClubs">> | null {
        if (item != null) {
            let dataMapped: Omit<Tenant, "numberOfClubs"> = {
                tenantName: item.name,
                cif: Number.parseInt(item.cif),
                address: item.address,
                phone: Number.parseInt(item.phone),
                email: item.email,
                remark: item.remark,
                micronId: item.micronId,
                tenantId: item.tenantId
            };
            return dataMapped
        }
        return null;
    }

    // Handlers:
    function onClickHandler() {
        setIsDisabled(previous => !previous);
    }

    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setTenantForm(prev => ({
            ...prev,
            [name]: name === "cif" || name === "phone" ? Number(value) : value
        }));
    }

    async function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        try {
            // ? Question: Can managers be modified in the tenant tab?
            if (tenantForm.tenantId) {
                await modifyUser.execute(tenantForm);
                alert("Tenant successfully modified!");
            }
        } catch (error) {
            console.error(error);
            alert("An error has occurred");
        }
    }

    useEffect(() => {
        if (object) {
            const dataMapped = itemMapper(object);
            dataMapped == null ? "" : setTenantForm(dataMapped);
        }
    }, [object]);

    if (!object) {
        return (
            <div>
                <p>Loading...</p>
            </div>
        );
    }

    return (
        <>
            <form className="frm-cntnr" onSubmit={submitHandler}>
                <main className="frm-mn-cntnr">
                    <div className="frm-dv">
                        <div className="fp-div">
                            <label htmlFor="tenantName">Tenant Name</label>
                            <input
                                className="input"
                                id="tenantName"
                                name="tenantName"
                                type="text"
                                value={isDisabled ? object.name : tenantForm.tenantName}
                                disabled={isDisabled}
                                placeholder={isDisabled ? "" : object.name}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="fp-div">
                            <label htmlFor="address">Tenant Address</label>
                            <input
                                className="input"
                                id="address"
                                name="address"
                                type="text"
                                value={isDisabled ? object.address : tenantForm.address}
                                disabled={isDisabled}
                                placeholder={isDisabled ? "" : object.address}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="fp-div">
                            <label htmlFor="email">Tenant email</label>
                            <input
                                className="input"
                                id="email"
                                name="email"
                                type="text"
                                value={isDisabled ? object.email : tenantForm.email}
                                disabled={isDisabled}
                                placeholder={isDisabled ? "" : object.email}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="fp-div">
                            <label htmlFor="remark">Remark</label>
                            <input
                                className="input"
                                id="remark"
                                name="remark"
                                type="text"
                                value={isDisabled ? object.remark : tenantForm.remark}
                                disabled={isDisabled}
                                placeholder={isDisabled ? "" : object.remark}
                                onChange={changeHandler}
                            />
                        </div>
                    </div>
                    <div className="frm-dv">
                        <div className="fp-div">
                            <label htmlFor="tenantCIF">CIF</label>
                            <input
                                className="input"
                                id="tenantCIF"
                                name="cif"
                                type="text"
                                value={isDisabled ? object.cif : tenantForm.cif}
                                disabled={isDisabled}
                                placeholder={isDisabled ? "" : object.cif}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="fp-div">
                            <label htmlFor="phone">Phone</label>
                            <input
                                className="input"
                                id="phone"
                                name="phone"
                                type="phone"
                                value={isDisabled ? object.phone : tenantForm.phone}
                                disabled={isDisabled}
                                placeholder={isDisabled ? "" : object.phone}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="fp-div">
                            <label htmlFor="micronId">Micron ID</label>
                            <input
                                className="input"
                                id="micronId"
                                type="text"
                                value={isDisabled ? object.micronId : tenantForm.micronId}
                                disabled={isDisabled}
                                placeholder={isDisabled ? "" : object.micronId}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="fp-div">
                            <label htmlFor="managers">Managers</label>
                            <input
                                className="input"
                                id="managers"
                                type="text"
                                value={object.managers}
                                disabled
                            />
                        </div>
                    </div>
                </main>
                <div className="editButtonContainer">
                    <button className="button" type="button" onClick={onClickHandler}>Edit</button>
                    <button className="button" type="submit">Save</button>
                </div>
            </form>
        </>
    );
}

export default DisplayItemInfoTenant;