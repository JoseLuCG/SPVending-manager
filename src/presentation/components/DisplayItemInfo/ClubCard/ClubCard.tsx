import styles from "./ClubCard.module.css"
import { ClubCardProps } from "../../../../domain/entities/property-models/componentsProperties";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";

function ClubCard({ clubs }: ClubCardProps) {

    // Styles
    const rowClassName = () => {
        return `${styles.tableRow}`;
    }
    return (
        <div className={styles.section2}>
            <DataTable
                value={clubs}
                rowClassName={rowClassName}
                className={styles.table}
            >
                <Column headerClassName={styles.headerTB} field="name" header="Name"/>
                <Column headerClassName={styles.headerTB} field="machinesCount" header="Machines"/>
                <Column headerClassName={styles.headerTB} field="phone" header="Phone"/>
                <Column headerClassName={styles.headerTB} field="address" header="Address"/>
                <Column headerClassName={styles.headerTB} field="userManagers" header="Managers"/>
            </DataTable>
        </div>
    );
}

export default ClubCard;

// clubsInfo.map((club) => <ClubCard club={club}/>)