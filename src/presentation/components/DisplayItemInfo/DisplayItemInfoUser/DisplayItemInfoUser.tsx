import { SetStateAction, useEffect, useState } from "react";
import { ModifyUser } from "../../../../application/usecases/UserUseCases/ModifyUser";
import { DIIUserProps } from "../../../../domain/entities/property-models/componentsProperties";
import { UserRepositoryHttp } from "../../../../infraestructure/adapters/api/UserRepositoryHttp";
import styles from "./../DisplayItemInfo.module.css";
import { User, UserApi } from "../../../../domain/entities/models/user";
import SelectClubOptions from "../../SelectClubOptions/SelectClubOptions";
import SelectTenantOptions from "../../SelectTenantOptions/SelectTenantOptions";
import Loader from "../../Loader/Loader";
import { useNavigate } from "react-router";
import { generate } from "generate-password-browser";

const userRepository = new UserRepositoryHttp();
const modifyUser = new ModifyUser(userRepository);

function DisplayItemInfoUser({ object }: DIIUserProps) {
    // States:
    const navigate = useNavigate();
    const [isDisabled, setIsDisabled] = useState(true);
    const [userForm, setUserForm] = useState<User>({
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
    const [hasUserTypeBeenChanged, setHasUserTypeBeenChanged] = useState(false);

    // Functions: 
    function itemMapper(item: UserApi): SetStateAction<Omit<User, "clubName">> | null {
        if (item != null) {
            let dataMapped: User = {
                username: item.username,
                password: item.password,
                micronId: item.micronId,
                micronUser: item.micronUser,
                micronPass: item.micronPass,
                userType: Number.parseInt(item.userType),
                tenantEntityName: item.tenantEntityName !== null ? item.tenantEntityName : "",
                clubEntityName: item.clubEntityName !== null ? item.clubEntityName : "",
                tenantId: item.tenantEntityId !== null ? item.tenantEntityId : "",
                clubId: item.clubEntityId !== null ? item.clubEntityId : "",
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

    function onClickGeneratePassword() {
        const generatedPassword = generate({
            length: 12,
            numbers: true,
            lowercase: true,
            uppercase: true,
            strict: true
        });
        setUserForm({
            ...userForm,
            ["password"]: generatedPassword
        });
    }

    function changeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        const mappedname = name === "clubEntityId" ? "clubId" : name;

        if (mappedname === "userType") {
            setHasUserTypeBeenChanged(true);
        }

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

    function backHandler() {
        navigate(-1);
    }

    // UseEffects:
    useEffect(() => {
        if (object) {
            const dataMapped = itemMapper(object);
            dataMapped == null ? "" : setUserForm(dataMapped);
        }
    }, [object]);

    if (!object) {
        return (
            <Loader />
        );
    }

    return (
        <>
            <form className={styles.frmCntnr} onSubmit={submitHandler}>
                <main className={styles.frmMnCntnr}>
                    <div className={styles.section}>
                        <div className={styles.frmDv}>
                            <div className={styles.fpDiv}>
                                <label htmlFor="username">User Name</label>
                                <input
                                    className={styles.input}
                                    id="username"
                                    name="username"
                                    type="text"
                                    value={isDisabled ? object.username : userForm.username}
                                    disabled={isDisabled}
                                    placeholder={isDisabled ? "" : object.username}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className={styles.fpDiv}>
                                <label htmlFor="password">Password</label>
                                <div className={styles.passCont}>
                                    <button onClick={onClickGeneratePassword} type="button" hidden={isDisabled?true:false}>G</button>
                                    <input
                                        className={styles.input}
                                        id="password"
                                        name="password"
                                        type="text"
                                        value={isDisabled ? object.password : userForm.password}
                                        disabled={isDisabled}
                                        placeholder={isDisabled ? "" : object.password}
                                        onChange={changeHandler}
                                    />
                                </div>
                            </div>
                            <div className={styles.fpDiv}>
                                <label htmlFor="adminFor">Admin For</label>
                                {
                                    isDisabled ?
                                        object.clubEntityName ?
                                            <input
                                                className={styles.input}
                                                id="adminFor"
                                                type="text"
                                                value={object.clubEntityName !== null ? object.clubEntityName : ""}
                                                disabled={isDisabled}
                                            />
                                            :
                                            <input
                                                className={styles.input}
                                                id="adminFor"
                                                type="text"
                                                value={object.tenantEntityName !== null ? object.tenantEntityName : ""}
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
                                            {
                                                hasUserTypeBeenChanged && (
                                                    userForm.userType === 2 ?
                                                        <SelectTenantOptions onSelectTenant={changeHandler} tenantUuid={object.tenantEntityId as string} tenantName={object.tenantEntityName as string}/> :
                                                        <SelectClubOptions onSelectClub={changeHandler} clubUuid={object.clubEntityId as string} clubName={object.clubEntityName as string}/>
                                                )
                                            }
                                        </div>
                                }
                            </div>
                        </div>
                        <div className={styles.frmDv}>
                            <div className={styles.fpDiv}>
                                <label htmlFor="micronId">Micron ID</label>
                                <input
                                    className={styles.input}
                                    id="micronId"
                                    name="micronId"
                                    type="text"
                                    value={isDisabled ? object.micronId : userForm.micronId}
                                    disabled={isDisabled}
                                    placeholder={isDisabled ? "" : object.micronId}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className={styles.fpDiv}>
                                <label htmlFor="micronUser">Micron User</label>
                                <input
                                    className={styles.input}
                                    id="micronUser"
                                    name="micronUser"
                                    type="text"
                                    value={isDisabled ? object.micronUser : userForm.micronUser}
                                    disabled={isDisabled}
                                    placeholder={isDisabled ? "" : object.micronUser}
                                    onChange={changeHandler}
                                />
                            </div>
                            <div className={styles.fpDiv}>
                                <label htmlFor="micronPass">Micron Pass</label>
                                <input
                                    className={styles.input}
                                    id="micronPass"
                                    name="micronPass"
                                    type="text"
                                    value={isDisabled ? object.micronPass : userForm.micronPass}
                                    disabled={isDisabled}
                                    placeholder={isDisabled ? "" : object.micronPass}
                                    onChange={changeHandler}
                                />
                            </div>
                        </div>
                    </div>
                </main>
                <div className={styles.editButtonContainer}>
                    <button className={styles.button} type="button" onClick={onClickHandler}>Edit</button>
                    <button className={styles.button} type="submit">Save</button>
                    <button className={styles.button} type="button" onClick={backHandler}>Back</button>
                </div>
            </form>
        </>
    );
}

export default DisplayItemInfoUser;