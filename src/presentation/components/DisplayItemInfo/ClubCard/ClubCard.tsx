import styles from "./ClubCard.module.css"
import { ClubCardProps } from "../../../../domain/entities/property-models/componentsProperties";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function ClubCard({ clubs }: ClubCardProps) {
    return (
        <div className={styles.section2}>
            <DataTable
                value={clubs}
            >
                <Column field="name" header="Name"/>
                <Column field="machinesCount" header="Machines"/>
                <Column field="phone" header="Phone"/>
                <Column field="address" header="Address"/>
            </DataTable>
        </div>
    );
}

export default ClubCard;

// clubsInfo.map((club) => <ClubCard club={club}/>)