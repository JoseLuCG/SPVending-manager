import './Main.css';
import { Tenant, TenantList } from '../../models/dataModels/tenant';
//import searchIcon from './../../assets/icons/Search-more.svg';
import Aside from './../Aside/Aside';
import { useEffect, useState } from 'react';
//import DataRow from '../DataRow/DataRow';
//import TableHeader from '../TableHeader/TableHeader';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

function Main() {
	//States:
	const [tenants, setTenants] = useState<TenantList>([]);

	//Functions:
	function createArrayOfTenantsExamples() {
		const tenantsArray: TenantList = [];
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
			tenantsArray.push(tenantExample);
		}
		setTenants(tenantsArray);
	}

	// ----- Styles -----
	const rowClassName = () => {
		return {
			"table-row": true,
			"p-datatable-thead": true
		};
	};

	useEffect(
		() => {
			createArrayOfTenantsExamples();
		}
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
					<DataTable value={tenants} selectionMode="single" rowClassName={rowClassName}>
						<Column field="tenantName" header="Name" className='headerRow'></Column>
						<Column field="cif" header="CIF"></Column>
						<Column field="phone" header="Phone"></Column>
						<Column field="email" header="Email"></Column>
						<Column field="numberOfClubs" header="Clubs"></Column>
						<Column field="" header="Actions"></Column>
					</DataTable>
				</div>
			</section>
		</main>
	)
}

export default Main;