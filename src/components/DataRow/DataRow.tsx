import { Tenant } from '../../models/dataModels/tenant';
import './DataRow.css';
type DataRowProps = {
    data: Tenant
}

function DataRow({data}: DataRowProps) {

    return(
        <div className='table-header'>
            <p>{data.tenantName}</p>
            <p>{data.cif}</p>
            <p>{data.email}</p>
            <p>{data.phone}</p>
            <p>{data.numberOfClubs}</p>
        </div>
    );
}

export default DataRow;