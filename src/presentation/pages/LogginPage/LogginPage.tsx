import styles from "./LogginPAge.module.css"
import logo from "./../../../assets/logo.png";
import { useContext, useEffect, useState } from "react";
import { AdminRepositoryHttp } from "../../../infraestructure/adapters/api/AdminRepositoryHttp";
import { LogAdmin } from "../../../application/usecases/AdminUseCases/LogAdmin";
import { Admin } from "../../../contexts/AdminContext";
import { useNavigate } from "react-router";
import { appRoutes } from "../../../utilities/defines/routes";
import { AdminApi } from "../../../domain/entities/models/admin";
import { ADMIN_INFO_KEY } from "../../../utilities/defines/statements";

const repository = new AdminRepositoryHttp();
const logAdmin = new LogAdmin(repository);

function LogginPage() {
    const [ admin, setAdmin ] = useContext(Admin);
    const [ adminForm, setAdminForm ] = useState({
        username:"",
        password:""
    });
    const [ errorMessage, setErrorMessage ] = useState("");
    const navigate = useNavigate();
    /*
	username:"Admin",
	password:"abc123.2"
    */

    // Functions:
    function setLocalStorage(admin: AdminApi) {
        localStorage.setItem(ADMIN_INFO_KEY, JSON.stringify(admin));
    }

    // Handlers:
    function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = event.target;
        setAdminForm({
            ...adminForm,
            [name]: value
        });
    }

    async function submitHandler(event:React.FormEvent) {
        event.preventDefault();
        try {
            const response = await logAdmin.execute(adminForm);
            if (typeof response !== "string") {
                setAdmin(response);
                setLocalStorage(response);
            }
        } catch (error:any) {
            console.error(error);
            let errorMessage: string = "Unknow error occurred";
            if (error instanceof Error) {
                errorMessage = "(!)" + error.message;
            } else if (typeof error === "string") {
                errorMessage = "(!)" + error;
            } else if ( (typeof error === "object") && (error !== null) && "Error" in error) {
                errorMessage = "(!)" + (error as any).Error;
            }
            setErrorMessage(errorMessage);
            alert("Error log in the admin");
        }
    }

    useEffect(
        ()=> {
            if (admin !== null) {
                navigate(appRoutes.tenantsRoute);
            }
        },[admin]
    );

    return (
        <>
            <div className={styles.mainContainer}>
                <div className={styles.footer}>
                    <img className={styles.img} src={logo} alt="logo" />
                </div>
                <div className={styles.registerContainer}>
                    <form onSubmit={submitHandler} className={styles.form}>
                        <label className={styles.label} id="adminLabel" htmlFor="adminProfile">Username</label>

                        <input
                            className={styles.inputStyle}
                            id="adminProfile"
                            name="username"
                            type="text"
                            value={adminForm.username}
                            onChange={changeHandler}
                            required
                        />
                        <label className={styles.label} htmlFor="adminProfile">Password</label>
                        <input
                            className={styles.inputStyle}
                            id="adminPassword"
                            name="password"
                            type="password"
                            value={adminForm.password}
                            onChange={changeHandler}
                            required
                        />
                        <p className={styles.errMessage}>{errorMessage}</p>
                        <button type="submit" className={styles.logginButton}>LOGIN</button>
                    </form>
                </div>

            </div>
        </>
    );
}

export default LogginPage;