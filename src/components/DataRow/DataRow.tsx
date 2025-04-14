import { DataRowProps } from '../../models/propertyModels/componentsProperties';
import './DataRow.css';

function DataRow({data}: DataRowProps) {
    function clickHandler() {
        alert("Hey listen!");
    }

    return(
        <div className='table-row' onClick={clickHandler}>
            <p>{data.tenantName}</p>
            <p>{data.cif}</p>
            <p>{data.phone}</p>
            <p>{data.email}</p>
            <p>{data.numberOfClubs}</p>
        </div>
    );
}

export default DataRow;