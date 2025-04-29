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
    const [ userForm, setUserForm ] = useState<Omit<User,"userId">>({
        username: "",
        password: "",
        micronId: "",
        micronUser: "",
        micronPass: "",
        type: 1,
        clubName: "",
        tenantId: ""
    });

    //Handlers:
    function changeHandler( event:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
        const {name, value} = event.target;
        setUserForm({
            ...userForm,
            [name]: name === "type"? Number(value) : value
        });
    }

    async function submitHandler(event:React.FormEvent) {
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

    return(
        <div className="modal-overlay">
            <div className="modal">
                <h2>Registear User</h2>
                <form onSubmit={submitHandler} className="form">
                    <input name="username" placeholder="User name" value={userForm.username} onChange={changeHandler} required />
                    <input name="password" placeholder="User password" value={userForm.password} onChange={changeHandler} required />
                    <input name="micronId" placeholder="Micron ID" value={userForm.micronId} onChange={changeHandler} required />
                    <input name="micronPass" placeholder="Micron Pass" value={userForm.micronPass} onChange={changeHandler} required />
                    <SelectTenantOptions onSelectTenant={changeHandler}/>
                    <br/>
                    <SelectClubOptions onSelectClub={changeHandler}/>
                    <br />
                    <button type="submit">Registrar</button>
                    <button type="button" onClick={onClose}>Cancelar</button>
                </form>
            </div>
        </div>
    );
}

export default UserRegisterModal;