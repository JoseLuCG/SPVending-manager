import './TenantsPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayTenant } from '../../../utilities/infoDisplay';
import { useEffect, useState } from 'react';
import { TenantInfoDisplay } from '../../../domain/entities/models/tenant';
import { TenantRepositoryHttp } from '../../../infraestructure/adapters/api/TenantRepositoryHttp';
import { GetTenantList } from '../../../application/usecases/TenantUseCases/GetTenantList';
import { DeleteTenant } from '../../../application/usecases/TenantUseCases/DeleteTenant';

const repository = new TenantRepositoryHttp();
const getTenantList = new GetTenantList(repository);
const deleteTenant = new DeleteTenant(repository);

function TenantsPage() {
	const [ tenants , setTenants ] = useState<TenantInfoDisplay[]>([]);
	const [ uuid, setUuid ] = useState("");

	useEffect(()=> {
		getTenantList.execute()
			.then(setTenants)
			.catch(console.error);
	}, []);

	useEffect(()=> {
		if (uuid != "") {
			console.log(uuid);
			deleteTenant.execute(uuid);
			setUuid("");
		}
	}, [uuid]);

	return (
		<>
			<Header />
			<Main textInfoDisplay={infoDisplayTenant} dataToDisplay={tenants} setterUuid={setUuid}/>
		</>
	)
}

export default TenantsPage;
