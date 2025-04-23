import './TenantsPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayTenant } from '../../../utilities/infoDisplay';
import { useEffect, useState } from 'react';
import { TenantInfoDisplay } from '../../../domain/entities/models/tenant';
import { TenantRepositoryHttp } from '../../../infraestructure/adapters/api/TenantRepositoryHttp';
import { GetTenantList } from '../../../application/usecases/TenantUseCases/GetTenantList';

const repository = new TenantRepositoryHttp();
const getTenantList = new GetTenantList(repository);

function TenantsPage() {
	const [ tenants , setTenants ] = useState<TenantInfoDisplay[]>([]);

	useEffect(()=> {
		getTenantList.execute()
			.then(setTenants)
			.catch(console.error);
	}, []);

	return (
		<>
			<Header />
			<Main textInfoDisplay={infoDisplayTenant} dataToDisplay={tenants} />
		</>
	)
}

export default TenantsPage;
