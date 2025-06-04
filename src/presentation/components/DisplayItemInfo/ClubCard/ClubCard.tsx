import styles from "./ClubCard.module.css"
import { ClubCardProps } from "../../../../domain/entities/property-models/componentsProperties";

function ClubCard({ club }: ClubCardProps) {
    return (
        <div key={club.clubId} className={styles.clubCard}>
            <h3>{club.name}</h3>
            <p>{club.address}</p>
            <p>{club.phone}</p>
            <p>{club.machinesCount}</p>
            <p>{club.userManagers}</p>
        </div>
    );
}

export default ClubCard;