import './Main.css';
//import searchIcon from './../../assets/icons/Search-more.svg';
import Aside from './../Aside/Aside';
import { DataTable, DataTableRowClickEvent } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MainProps } from './../../../domain/entities/property-models/componentsProperties';
import { useContext, useEffect, useState } from 'react';
import Modal from '../Modals/Modal';
import { SelectedItem } from '../../../contexts/SelectedItemContext';
import { getEntityId } from '../../../utilities/tools/checkers';
import { TenantRepositoryHttp } from '../../../infraestructure/adapters/api/TenantRepositoryHttp';
import { ClubRepositoryHttp } from '../../../infraestructure/adapters/api/ClubRepositoryHttp';
import { UserRepositoryHttp } from '../../../infraestructure/adapters/api/UserRepositoryHttp';
import { MachineRepositoryHttp } from '../../../infraestructure/adapters/api/MachineRepositoryHttp';
import { GetTenant } from '../../../application/usecases/TenantUseCases/GetTenant';
import { GetClub } from '../../../application/usecases/ClubUseCases/GetClub';
import { GetMachine } from '../../../application/usecases/MachineUseCases/GetMachine';
import { GetUser } from '../../../application/usecases/UserUseCases/GetUser';
import { useNavigate } from 'react-router';
import { appRoutes } from '../../../utilities/defines/routes';

const tenantRepository = new TenantRepositoryHttp();
const clubRepository = new ClubRepositoryHttp();
const userRepository = new UserRepositoryHttp();
const machineRepository = new MachineRepositoryHttp();

function Main({textInfoDisplay, dataToDisplay}: MainProps) {
	// ---------- States ----------
	const [ item, setItem ] = useContext(SelectedItem);
	const [ showModal, setShowModal ] = useState(false);
	const [ rowSelected ] = useState({});
	const navigate = useNavigate();

	// Handlers:
	function selectionRowHandler(event:DataTableRowClickEvent) {
		const selectedItemId = getEntityId(event.data);

		if (textInfoDisplay.list === "Tenant") {
			const findTenantById = new GetTenant(tenantRepository);
			findTenantById.execute(selectedItemId)
				.then(setItem)
				.catch(console.error);
		}

		if (textInfoDisplay.list === "Club") {
			const findClubById = new GetClub(clubRepository);
			findClubById.execute(selectedItemId)				
				.then(setItem)
				.catch(console.error);
			
		}

		if (textInfoDisplay.list === "Machine") {
			const findMachineById = new GetMachine(machineRepository);
			findMachineById.execute(selectedItemId)
				.then(setItem)
				.catch(console.error);
		}

		if (textInfoDisplay.list === "User") {
			const findUserById = new GetUser(userRepository);
			findUserById.execute(selectedItemId)
				.then(setItem)
				.catch(console.error);
		}
		navigate(appRoutes.selectedItemRoute);
	}

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
						<button className='addButton' onClick={() => setShowModal(true) }>+ Add {textInfoDisplay.list}</button>
						<Modal typeModal={textInfoDisplay.list} isOpen={showModal} onClose={() => setShowModal(false)}/>
						<input className='searcher' type="text" placeholder='Buscar...' />
					</div>
					<DataTable 
						value={dataToDisplay} 
						selectionMode="single" 
						rowClassName={rowClassName} 
						selection={rowSelected}
						onRowClick={selectionRowHandler}
					>
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