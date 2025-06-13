import styles from "./../Modal.module.css"
import { useState } from "react";
import { CreateUser } from "../../../../application/usecases/UserUseCases/CreateUser";
import { ModalProps } from "../../../../domain/entities/property-models/componentsProperties";
import { UserRepositoryHttp } from "../../../../infraestructure/adapters/api/UserRepositoryHttp";
import { User } from "../../../../domain/entities/models/user";
import SelectTenantOptions from "../../SelectTenantOptions/SelectTenantOptions";
import SelectClubOptions from "../../SelectClubOptions/SelectClubOptions";
import { generate } from "generate-password-browser";


const userRepo = new UserRepositoryHttp();
const createUser = new CreateUser(userRepo);

function UserRegisterModal({ isOpen, onClose, toastRef }: ModalProps) {
    // States:
    const [userForm, setUserForm] = useState<Omit<User, "userId" | "clubName">>({
        username: "",
        password: "",
        micronId: "",
        micronUser: "",
        micronPass: "",
        userType: 1,
        tenantId: "",
        clubId: ""
    });

    const showSuccess = ()=> {
        toastRef.current?.show({ severity: 'success', summary: 'Success', detail: 'User created successfully.' });
    }

    const showError = () => {
        toastRef.current?.show({severity:'error', summary: 'Error', detail:'Error creating user', life: 3000});
    }

    //Handlers:
    function changeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        const mappedname = name === "clubEntityId" ? "clubId" : name;
        setUserForm({
            ...userForm,
            [mappedname]: mappedname === "userType" ? Number(value) : value
        });
    }

    function onClickGeneratePassword() {
        const generatedPassword = generate({
            length:12,
            numbers:true,
            lowercase:true,
            uppercase:true,
            strict: true
        });
        setUserForm({
            ...userForm,
            ["password"]:generatedPassword
        });
    }

    async function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        try {
            const fetchData = await createUser.execute(userForm);
            console.log(fetchData);
            showSuccess();
            onClose();
            // TODO: Implement a timer for page reload
            window.location.reload();
        } catch {
            showError();
        }
    }

    if (!isOpen) return null;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <form onSubmit={submitHandler} className={styles.form}>
                    <h2 className={styles.h2}>REGISTER USER</h2>
                    <div className={styles.inputPack}>
                        <label htmlFor="">User name: </label>
                        <input name="username" type="text" placeholder="User name" value={userForm.username} onChange={changeHandler} required />
                    </div>
                    <div className={styles.inputPack}>
                        <label htmlFor="">User password: </label>
                        <div className={styles.passCont}>
                            <button onClick={onClickGeneratePassword} type="button">Generate</button>
                            <input name="password" type="text" placeholder="User password" value={userForm.password} onChange={changeHandler} required />
                        </div>
                    </div>
                    <div className={styles.inputPack}>
                        <label htmlFor="">User Micron Id</label>
                        <input name="micronId" placeholder="Micron ID" value={userForm.micronId} onChange={changeHandler} required />
                    </div>
                    <div className={styles.inputPack}>
                        <label htmlFor="">Micron User</label>
                        <input name="micronUser" placeholder="Micron User" value={userForm.micronUser} onChange={changeHandler} required />
                    </div>
                    <div className={styles.inputPack}>
                        <label htmlFor="">Micron Pass</label>
                        <input name="micronPass" placeholder="Micron Pass" value={userForm.micronPass} onChange={changeHandler} required />
                    </div>
                    <div className={styles.inputPack}>
                        <p>Select user rol:</p>
                        <div className={styles.radioButtons}>
                        <label htmlFor="type1">Tenant admin</label>
                        <input
                            className={styles.rdbttn}
                            type="radio"
                            id="type1"
                            name="userType"
                            value="2"
                            checked={userForm.userType === 2}
                            onChange={changeHandler}
                        />
                        <br />
                        <label htmlFor="type2">Club admin</label>
                        <input
                            className={styles.rdbttn}
                            type="radio"
                            id="type2"
                            name="userType"
                            value="1"
                            checked={userForm.userType === 1}
                            onChange={changeHandler}
                        />
                        </div>
                    </div>
                    {
                        userForm.userType == 1?
                            <div className={styles.inputPack}>
                                <SelectClubOptions onSelectClub={changeHandler} />
                            </div>:
                            <div className={styles.inputPack}>
                                <SelectTenantOptions onSelectTenant={changeHandler} />
                            </div>
                    }

                    <div className={styles.buttonsContainer}>
                        <button className={styles.button} type="submit">Registrar</button>
                        <button className={styles.button} type="button" onClick={onClose}>Cancelar</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default UserRegisterModal;