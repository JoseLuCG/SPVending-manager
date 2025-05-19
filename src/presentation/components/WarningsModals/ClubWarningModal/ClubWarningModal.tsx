import styles from "./../WarningsModals.module.css";
import { WarningProps } from "../../../../domain/entities/property-models/componentsProperties";
import { ClubRepositoryHttp } from "../../../../infraestructure/adapters/api/ClubRepositoryHttp";
import { DeleteClub } from "../../../../application/usecases/ClubUseCases/DeleteClub";
import alertIcon from "./../../../../assets/icons/alert.png";

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
                <div className={styles.content}>
                    <img className={styles.imgAlert} src={alertIcon} alt="" height="200" width="200"/>
                    <h2 className={styles.textAlert}>Are you sure you want to delete the Club?</h2>
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

export default ClubWarningModal;