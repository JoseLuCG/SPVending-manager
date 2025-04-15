import './Main.css';
import { Tenant, TenantList } from '../../models/dataModels/tenant';
import { Club, ClubList } from '../../models/dataModels/club';
//import searchIcon from './../../assets/icons/Search-more.svg';
import Aside from './../Aside/Aside';
import { useEffect, useState } from 'react';
//import DataRow from '../DataRow/DataRow';
//import TableHeader from '../TableHeader/TableHeader';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { MainProps } from '../../models/propertyModels/componentsProperties';

function Main({infoDisplay}: MainProps) {
	//States:
	const [ tenants, setTenants ] = useState<TenantList>([]);
	const [ clubs, setClubs ] = useState<ClubList>([]);

	//Functions:
	function createArrayOfTenantsExamplesOrClubExamples() {
		const tenantsArray: TenantList = [];
		const clubsArray: ClubList = [];
		const clubExample: Club = {
			clubId: "a81bc81b-dead-4e5d-abff-90865d1e13b1",
			clubName: "PadelPrix Ourense",
			cif: 123456789,
			address: "Rua Camiños N34 P4D",
			phone: 622333444,
			email: "clubou@gmail.com",
			remark: "emtpy",
			micronId: "VFW1234",
			accountingId: "HOLAMUNDO",
			tenantName: "PadelPrix",
			numberOfMachines: 5
		}
		
		const tenantExample: Tenant = {
			tenantId: "a81bc81b-dead-4e5d-abff-90865d1e13b1",
			tenantName: "PadelPrix",
			cif: 123456789,
			address: "Example address N2 45",
			phone: 611222333,
			email: "padelprix@gmail.com",
			remark: "empty",
			micronId: "12345678",
			numberOfClubs: 4
		};

		for (let idx = 0; idx < 5; idx++) {
			clubsArray.push(clubExample);
		}
		for (let idx = 0; idx < 5; idx++) {
			tenantsArray.push(tenantExample);
		}
		setTenants(tenantsArray);
		setClubs(clubsArray);
	}

	// ----- Styles -----
	const rowClassName = () => {
		return {
			"table-row": true,
			"p-datatable-thead": true
		};
	};

	// ----- Functions -----
	function result() {
		if (infoDisplay.column1.field == "tenantName") {
			return tenants;
		} else {
			return clubs;
		}
	}

	useEffect(
		() => {
			createArrayOfTenantsExamplesOrClubExamples();			
		}, []
	);
	

	return (
		<main>
			<Aside />
			<section>
				<div className='table-contents'>
					<div className='header-content'>
						<p className='infText'>Tenant List</p>
						<button className='addButton'>+ Add tenant</button>
						<input className='searcher' type="text" placeholder='Buscar...' />
					</div>
					<DataTable value={result()} selectionMode="single" rowClassName={rowClassName}>
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