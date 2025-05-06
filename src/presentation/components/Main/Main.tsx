import styles from "./Main.module.css";
//import searchIcon from './../../assets/icons/Search-more.svg';
import Aside from './../Aside/Aside';
import { DataTable, DataTableRowClickEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MainProps } from './../../../domain/entities/property-models/componentsProperties';
import { useState } from 'react';
import Modal from '../Modals/Modal';
import { getEntityId } from '../../../utilities/tools/checkers';
import { useLocation, useNavigate } from 'react-router';
import { appRoutes } from '../../../utilities/defines/routes';

function Main({textInfoDisplay, dataToDisplay}: MainProps) {
	// ---------- States ----------
	//const [ item, setItem ] = useContext(SelectedItem);
	const [ showModal, setShowModal ] = useState(false);
	const [ rowSelected ] = useState({});
	const navigate = useNavigate();
	const location = useLocation();

	// Handlers:
	function selectionRowHandler(event:DataTableRowClickEvent) {
		const selectedItemId = getEntityId(event.data);
		navigate(`${location.pathname}` +  appRoutes.selectedItemRoute + `/${selectedItemId}`, {state:{from:location.pathname}});
	}

	// ---------- Styles ----------
	const rowClassName = () => {
		return  `${styles.tableRow} ${styles.pDatatableThead}`;
	};

	return (
		<main>
			<Aside />
			<section>
				<div className={styles.tableContents}>
					<div className={styles.headerContent}>
						<p className={styles.infText}>{textInfoDisplay.list} List</p>
						<button className={styles.addButton} onClick={() => setShowModal(true) }>+ Add {textInfoDisplay.list}</button>
						<Modal typeModal={textInfoDisplay.list} isOpen={showModal} onClose={() => setShowModal(false)}/>
						<input className={styles.searcher} type="text" placeholder='Buscar...' />
					</div>
					<DataTable 
						value={dataToDisplay} 
						selectionMode="single" 
						rowClassName={rowClassName} 
						selection={rowSelected}
						onRowClick={selectionRowHandler}
					>
						<Column headerClassName={styles.headerTB} field={textInfoDisplay.column1.field} header={textInfoDisplay.column1.header}></Column>
						<Column headerClassName={styles.headerTB} field={textInfoDisplay.column2.field} header={textInfoDisplay.column2.header}></Column>
						<Column headerClassName={styles.headerTB} field={textInfoDisplay.column3.field} header={textInfoDisplay.column3.header}></Column>
						<Column headerClassName={styles.headerTB} field={textInfoDisplay.column4.field} header={textInfoDisplay.column4.header}></Column>
						<Column headerClassName={styles.headerTB} field={textInfoDisplay.column5.field} header={textInfoDisplay.column5.header}></Column>
						<Column headerClassName={styles.headerTB} field="" header="Actions"></Column>
					</DataTable>
				</div>
			</section>
		</main>
	)
}

export default Main;