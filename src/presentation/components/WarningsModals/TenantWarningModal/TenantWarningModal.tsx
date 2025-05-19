import styles from "./../WarningsModals.module.css";
import { WarningProps } from "../../../../domain/entities/property-models/componentsProperties";
import { TenantRepositoryHttp } from "../../../../infraestructure/adapters/api/TenantRepositoryHttp";
import { DeleteTenant } from "../../../../application/usecases/TenantUseCases/DeleteTenant";
import alertIcon from "./../../../../assets/icons/alert.png";

const repository = new TenantRepositoryHttp();
const deleteTenant = new DeleteTenant(repository);

function TenantWarningModal({ isOpen, onClose, uuid, setUuid }: WarningProps) {
   
    function onClickHandler() {
        if (uuid != "") {
            console.log(uuid);
			deleteTenant.execute(uuid);
			setUuid("");
            onClose();
            window.location.reload();
		}
    }

    function onCloseHandler() {
        setUuid("");
        onClose();
    }

    if (!isOpen) return null;
    return(
        <>
            <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <div className={styles.content}>
                    <img className={styles.imgAlert} src={alertIcon} alt="" height="200" width="200"/>
                    <h2 className={styles.textAlert}>Are you sure you want to delete the Tenant?</h2>
                </div>
                <div className={styles.buttonsContainer}>
                    <button className={styles.button} type="button" onClick={onClickHandler}>Delete</button>
                    <button className={styles.button} type="button" onClick={onCloseHandler}>Cancel</button>
                </div>
            </div>
        </div>
        </>
    );
}

export default TenantWarningModal;