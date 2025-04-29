import "./../Modal.css"
import { useState } from "react";
import { CreateUser } from "../../../../application/usecases/UserUseCases/CreateUser";
import { ModalProps } from "../../../../domain/entities/property-models/componentsProperties";
import { UserRepositoryHttp } from "../../../../infraestructure/adapters/api/UserRepositoryHttp";
import { User } from "../../../../domain/entities/models/user";
import SelectTenantOptions from "../../SelectTenantOptions/SelectTenantOptions";
import SelectClubOptions from "../../SelectClubOptions/SelectClubOptions";


const userRepo = new UserRepositoryHttp();
const createUser = new CreateUser(userRepo);

function UserRegisterModal({ isOpen, onClose }: ModalProps) {
    // States:
    const [userForm, setUserForm] = useState<Omit<User, "userId"|"clubName">>({
        username: "",
        password: "",
        micronId: "",
        micronUser: "",
        micronPass: "",
        userType: 1,
        tenantId: ""
    });

    //Handlers:
    function changeHandler(event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const { name, value } = event.target;
        setUserForm({
            ...userForm,
            [name]: name === "userType" ? Number(value) : value
        });
    }

    async function submitHandler(event: React.FormEvent) {
        event.preventDefault();
        try {
            await createUser.execute(userForm);
            alert("User successfully registered!");
            onClose();
        } catch {
            alert("Error  registering user")
        }
    }

    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal">
                <h2>Registear User</h2>
                <form onSubmit={submitHandler} className="form">
                    <input name="username" type="text" placeholder="User name" value={userForm.username} onChange={changeHandler} required />
                    <input name="password" type="password" placeholder="User password" value={userForm.password} onChange={changeHandler} required />
                    <input name="micronId" placeholder="Micron ID" value={userForm.micronId} onChange={changeHandler} required />
                    <input name="micronUser" placeholder="Micron User" value={userForm.micronUser} onChange={changeHandler} required />                    
                    <input name="micronPass" placeholder="Micron Pass" value={userForm.micronPass} onChange={changeHandler} required />
                    <p>Select user rol:</p>
                    <br />
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
                    <br />
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
                    <SelectTenantOptions onSelectTenant={changeHandler} />
                    <br />
                    <SelectClubOptions onSelectClub={changeHandler} />
                    <br />
                    <button type="submit">Registrar</button>
                    <button type="button" onClick={onClose}>Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export default UserRegisterModal;