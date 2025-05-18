import styles from "./../WarningsModals.module.css";
import { WarningProps } from "../../../../domain/entities/property-models/componentsProperties";
import { ClubRepositoryHttp } from "../../../../infraestructure/adapters/api/ClubRepositoryHttp";
import { DeleteClub } from "../../../../application/usecases/ClubUseCases/DeleteClub";

const repository = new ClubRepositoryHttp();
const deleteClub = new DeleteClub(repository);

function ClubWarningModal({ isOpen, onClose, uuid, setUuid }: WarningProps) {
   
    function onClickHandler() {
        if (uuid != "") {
            console.log(uuid);
            deleteClub.execute(uuid);
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
                <h2>Are you sure you want to delete the tenant?</h2>
                <button type="button" onClick={onClickHandler}>Delete</button>
                <button type="button" onClick={onCloseHandler}>Cancel</button>
            </div>
        </div>
        </>
    );
}

export default ClubWarningModal;