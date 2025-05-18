import styles from "./../WarningsModals.module.css";
import { WarningProps } from "../../../../domain/entities/property-models/componentsProperties";
import { TenantRepositoryHttp } from "../../../../infraestructure/adapters/api/TenantRepositoryHttp";
import { DeleteTenant } from "../../../../application/usecases/TenantUseCases/DeleteTenant";

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

    if (!isOpen) return null;
    return(
        <>
            <div className={styles.modalOverlay}>
            <div className={styles.modal}>
                <h2>Are you sure you want to delete the tenant?</h2>
                <button type="button" onClick={onClickHandler}>Delete</button>
                <button type="button" onClick={onClose}>Cancel</button>
            </div>
        </div>
        </>
    );
}

export default TenantWarningModal;