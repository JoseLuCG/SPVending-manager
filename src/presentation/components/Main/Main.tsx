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