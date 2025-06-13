import styles from "./Main.module.css";
//import searchIcon from './../../assets/icons/Search-more.svg';
import trashIcon from "./../../../assets/icons/unnamed.png";
import Aside from './../Aside/Aside';
import { DataTable, DataTableRowClickEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MainProps } from './../../../domain/entities/property-models/componentsProperties';
import { useRef, useState } from 'react';
import Modal from '../Modals/Modal';
import { getEntityId } from '../../../utilities/tools/checkers';
import { useLocation, useNavigate } from 'react-router';
import { appRoutes } from '../../../utilities/defines/routes';
import { Toast } from "primereact/toast";
import Loader from "../Loader/Loader";

function Main({ textInfoDisplay, dataToDisplay, setterUuid, setPage }: MainProps) {
	// ---------- States ----------
	const [showModal, setShowModal] = useState(false);
	const [rowSelected] = useState({});
	const navigate = useNavigate();
	const location = useLocation();
	const toast = useRef<Toast>(null);
	const totalPages = dataToDisplay?.page.totalPages;

	// Handlers:
	function selectionRowHandler(event: DataTableRowClickEvent) {
		const selectedItemId = getEntityId(event.data);
		navigate(`${location.pathname}` + appRoutes.selectedItemRoute + `/${selectedItemId}`, { state: { from: location.pathname } });
	}

	function onClickHandler(data: any) {
		const dataId = getEntityId(data);
		setterUuid(dataId);
	}

	function onClickBackPage() {
		if (dataToDisplay) {
			if (dataToDisplay.page.number > 0) setPage(prev => prev = prev - 1);
			if (dataToDisplay.page.number == 0) setPage(0);
		}
	}

	function onClickNextPage() {
		console.log(dataToDisplay?.page.number);
		if (dataToDisplay) {
			if (dataToDisplay.page.number < dataToDisplay.page.totalPages -1) setPage(page => page = page + 1);
			if (dataToDisplay.page.number == dataToDisplay.page.totalPages -1) setPage(dataToDisplay.page.totalPages -1);
		}
	}

	// ---------- Styles ----------
	const rowClassName = () => {
		return `${styles.tableRow} ${styles.pDatatableThead}`;
	};

	if (dataToDisplay == null) {
		return(
			<main>
			<Toast ref={toast}/>
			<Aside />
			<section className={styles.sectionContainer}>
				<div className={styles.container}>
					<div className={styles.headerContent}>
						<p className={styles.infText}>{textInfoDisplay.list} List</p>
						<input className={styles.searcher} type="text" placeholder='Buscar...' />
						<Modal typeModal={textInfoDisplay.list} isOpen={showModal} onClose={() => setShowModal(false)} toastRef={toast}/>
						<button className={styles.addButton} onClick={() => setShowModal(true)}>+ Add {textInfoDisplay.list}</button>
					</div>
					<div className={styles.tableContainer}>
						<Loader />
					</div>
					<nav className={styles.paginatorContainer}>
						<button className={styles.pagBtn} onClick={onClickBackPage}> &lt;&lt; </button>
						<button className={styles.pagBtn} onClick={onClickNextPage}> &gt;&gt; </button>
					</nav>
				</div>
			</section>
		</main>
		);
	}

	return (
		<main>
			<Toast ref={toast}/>
			<Aside />
			<section className={styles.sectionContainer}>
				<div className={styles.container}>
					<div className={styles.headerContent}>
						<p className={styles.infText}>{textInfoDisplay.list} List</p>
						<input className={styles.searcher} type="text" placeholder='Buscar...' />
						<Modal typeModal={textInfoDisplay.list} isOpen={showModal} onClose={() => setShowModal(false)} toastRef={toast}/>
						<button className={styles.addButton} onClick={() => setShowModal(true)}>+ Add {textInfoDisplay.list}</button>
					</div>
					<div className={styles.tableContainer}>
						<DataTable
							value={dataToDisplay.content}
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
							<Column headerClassName={styles.headerTB} field="" header="Actions"
								body={(rowData) => (
									<div>
										<button onClick={() => onClickHandler(rowData)} className={styles.deleteButton}>
											<img src={trashIcon} alt="" height="30px" width="30px"/>
										</button>
									</div>
								)}
							/>
						</DataTable>
					</div>
					<nav className={styles.paginatorContainer}>
						<button className={styles.pagBtn} onClick={onClickBackPage}> &lt;&lt; </button>
						{
								Array.from({ length: totalPages ?? 0 }, (_, index) => (
									<button
										key={index}
										className={styles.pagBtn}
										onClick={() => setPage(index)}
									>
										{index + 1}
									</button>
								))
						}
						<button className={styles.pagBtn} onClick={onClickNextPage}> &gt;&gt; </button>
					</nav>
				</div>
			</section>
		</main>
	)
}

export default Main;