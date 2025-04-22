import './Main.css';
//import searchIcon from './../../assets/icons/Search-more.svg';
import Aside from './../Aside/Aside';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MainProps } from './../../../domain/entities/property-models/componentsProperties';
import TenantRegisterModal from '../Modals/TenantRegisterModal/TenantRgisterModal';
import { useState } from 'react';

function Main({infoDisplay, dataToDisplay}: MainProps) {
	// ---------- States ----------
	const [ showTenantModal, setShowTenantModal ] = useState(false);

	// ---------- Styles ----------
	const rowClassName = () => {
		return {
			"table-row": true,
			"p-datatable-thead": true
		};
	};

	return (
		<main>
			<Aside />
			<section>
				<div className='table-contents'>
					<div className='header-content'>
						<p className='infText'>{infoDisplay.list} List</p>
						<button className='addButton' onClick={() => setShowTenantModal(true) }>+ Add tenant</button>
						<TenantRegisterModal isOpen={showTenantModal} onClose={() => setShowTenantModal(false) }/>
						<input className='searcher' type="text" placeholder='Buscar...' />
					</div>
					<DataTable value={dataToDisplay} selectionMode="single" rowClassName={rowClassName}>
						<Column field={infoDisplay.column1.field} header={infoDisplay.column1.header}></Column>
						<Column field={infoDisplay.column2.field} header={infoDisplay.column2.header}></Column>
						<Column field={infoDisplay.column3.field} header={infoDisplay.column3.header}></Column>
						<Column field={infoDisplay.column4.field} header={infoDisplay.column4.header}></Column>
						<Column field={infoDisplay.column5.field} header={infoDisplay.column5.header}></Column>
						<Column field="" header="Actions"></Column>
					</DataTable>
				</div>
			</section>
		</main>
	)
}

export default Main;