import { SetStateAction, useEffect, useState } from "react";
import { ModifyUser } from "../../../../application/usecases/UserUseCases/ModifyUser";
import { DIIUserProps } from "../../../../domain/entities/property-models/componentsProperties";
import { UserRepositoryHttp } from "../../../../infraestructure/adapters/api/UserRepositoryHttp";
import "./../DisplayItemInfo.css";
import { User, UserApi } from "../../../../domain/entities/models/user";
import SelectClubOptions from "../../SelectClubOptions/SelectClubOptions";
import SelectTenantOptions from "../../SelectTenantOptions/SelectTenantOptions";

const userRepository = new UserRepositoryHttp();
const modifyUser = new ModifyUser(userRepository);

function DisplayItemInfoUser({ object }: DIIUserProps) {
    // States:
    const [isDisabled, setIsDisabled] = useState(true);
    const [userForm, setUserForm] = useState<Omit<User, "clubName">>({
        username: "",
        password: "",
        micronId: "",
        micronUser: "",
        micronPass: "",
        userType: 1,
        tenantId: "",
        clubId: "",
        userId: ""
    });

    // Functions: 
    function itemMapper(item: UserApi): SetStateAction<Omit<User, "clubName">> | null {
        if (item != null) {
            let dataMapped: Omit<User, "clubName"> = {
                username: item.username,
                password: item.password,
                micronId: item.micronId,
                micronUser: item.micronUser,
                micronPass: item.micronPass,
                userType: Number.parseInt(item.userType),
                tenantEntityName: item.tenantEntityName,
                clubEntityName: item.clubEntityName,
                tenantId: "",
                clubId: "",
                userId: item.userManagerId
            }
            return dataMapped;
        }
        return null;
    }

    // Handlers:
    function onClickHandler() {
        setIsDisabled(previous => !previous)
    }

    function changeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        const mappedname = name === "clubEntityId" ? "clubId" : name;
        setUserForm({
            ...userForm,
            [mappedname]: mappedname === "userType" ? Number(value) : value
        });
    }

    async function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        try {
            await modifyUser.execute(userForm);
            alert("User successfully modified!");
        } catch {
            alert("Error  registering user")
        }
    }

    useEffect(() => {
        if (object) {
            const dataMapped = itemMapper(object);
            dataMapped == null ? "" : setUserForm(dataMapped);
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
            <div className="editButtonContainer">
                <button onClick={onClickHandler}>Eddit</button>
            </div>
            <form className="frm-cntnr" onSubmit={submitHandler}>
                <main className="frm-mn-cntnr">
                    <div className="frm-dv">
                        <div className="fp-div">
                            <label htmlFor="username">User Name</label>
                            <input
                                id="username"
                                name="username"
                                type="text"
                                value={isDisabled ? object.username : userForm.username}
                                disabled={isDisabled}
                                placeholder={isDisabled ? "" : object.username}
                                onChange={changeHandler}
                            />
                        </div>
                        <div className="fp-div">
                            <label htmlFor="password">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="text"
                                value={isDisabled ? object.password : userForm.password}
                                disabled={isDisabled}
                                placeholder={isDisabled ? "" : object.password}
                            />
                        </div>
                        <div className="fp-div">
                            <label htmlFor="adminFor">Admin For</label>
                            {
                                isDisabled ?
                                    <input
                                        id="adminFor"
                                        type="text"
                                        value={object.clubEntityName ? object.clubEntityName : object.tenantEntityName}
                                        disabled={isDisabled}
                                    />
                                    :
                                    <div>
                                        <label htmlFor="type1">Tenant admin</label>
                                        <input
                                            className="rdbttn"
                                            type="radio"
                                            id="type1"
                                            name="userType"
                                            value="2"
                                            checked={userForm.userType === 2}
                                            onChange={changeHandler}
                                        />
                                        <label htmlFor="type2">Club admin</label>
                                        <input
                                            className="rdbttn"
                                            type="radio"
                                            id="type2"
                                            name="userType"
                                            value="1"
                                            checked={userForm.userType === 1}
                                            onChange={changeHandler}
                                        />
                                        <br />
                                        <SelectClubOptions onSelectClub={changeHandler} />
                                        <br />
                                        <SelectTenantOptions onSelectTenant={changeHandler} />
                                    </div>
                            }
                        </div>
                    </div>
                    <div className="frm-dv">
                        <div className="fp-div">
                            <label htmlFor="micronId">Micron ID</label>
                            <input
                                id="micronId"
                                name="micronId"
                                type="text"
                                value={isDisabled ? object.micronId : userForm.micronId}
                                disabled={isDisabled}
                                placeholder={isDisabled ? "" : object.micronId}
                            />
                        </div>
                        <div className="fp-div">
                            <label htmlFor="micronUser">Micron User</label>
                            <input
                                id="micronUser"
                                name="micronUser"
                                type="text"
                                value={isDisabled ? object.micronUser : userForm.micronUser}
                                disabled={isDisabled}
                                placeholder={isDisabled ? "" : object.micronUser}
                            />
                        </div>
                        <div className="fp-div">
                            <label htmlFor="micronPass">Micron Pass</label>
                            <input
                                id="micronPass"
                                name="micronPass"
                                type="text"
                                value={isDisabled ? object.micronPass : userForm.micronPass}
                                disabled={isDisabled}
                                placeholder={isDisabled ? "" : object.micronPass}
                            />
                        </div>
                    </div>
                </main>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </>
    );
}

export default DisplayItemInfoUser;