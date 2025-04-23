import './Main.css';
//import searchIcon from './../../assets/icons/Search-more.svg';
import Aside from './../Aside/Aside';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MainProps } from './../../../domain/entities/property-models/componentsProperties';
import TenantRegisterModal from '../Modals/TenantRegisterModal/TenantRgisterModal';
import { useState } from 'react';

function Main({textInfoDisplay, dataToDisplay}: MainProps) {
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
						<p className='infText'>{textInfoDisplay.list} List</p>
						<button className='addButton' onClick={() => setShowTenantModal(true) }>+ Add tenant</button>
						<TenantRegisterModal isOpen={showTenantModal} onClose={() => setShowTenantModal(false) }/>
						<input className='searcher' type="text" placeholder='Buscar...' />
					</div>
					<DataTable value={dataToDisplay} selectionMode="single" rowClassName={rowClassName}>
						<Column field={textInfoDisplay.column1.field} header={textInfoDisplay.column1.header}></Column>
						<Column field={textInfoDisplay.column2.field} header={textInfoDisplay.column2.header}></Column>
						<Column field={textInfoDisplay.column3.field} header={textInfoDisplay.column3.header}></Column>
						<Column field={textInfoDisplay.column4.field} header={textInfoDisplay.column4.header}></Column>
						<Column field={textInfoDisplay.column5.field} header={textInfoDisplay.column5.header}></Column>
						<Column field="" header="Actions"></Column>
					</DataTable>
				</div>
			</section>
		</main>
	)
}

export default Main;