import { DataRowProps } from '../../models/propertyModels/componentsProperties';
import './DataRow.css';

function DataRow({data}: DataRowProps) {

    return(
        <div className='table-row'>
            <p>{data.tenantName}</p>
            <p>{data.cif}</p>
            <p>{data.phone}</p>
            <p>{data.email}</p>
            <p>{data.numberOfClubs}</p>
        </div>
    );
}

export default DataRow;