import './TenantsPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayTenant } from '../../../utilities/infoDisplay';
import { useEffect, useState } from 'react';
import { TenantInfoDisplay } from '../../../domain/entities/models/tenant';
import { TenantRepositoryHttp } from '../../../infraestructure/adapters/api/TenantRepositoryHttp';
import { GetTenantList } from '../../../application/usecases/TenantUseCases/GetTenantList';
import TenantWarningModal from '../../components/WarningsModals/TenantWarningModal/TenantWarningModal';

const repository = new TenantRepositoryHttp();
const getTenantList = new GetTenantList(repository);

function TenantsPage() {
	const [ tenants , setTenants ] = useState<TenantInfoDisplay[]>([]);
	const [ uuid, setUuid ] = useState("");
	const [ showModal, setShowModal ] = useState(false); 

	useEffect(()=> {
		getTenantList.execute()
			.then(setTenants)
			.catch(console.error);
	}, []);

	useEffect(()=> {
		if (uuid != "") {
			setShowModal(true);
		}
	}, [uuid]);

	return (
		<>
			<Header />
			<Main textInfoDisplay={infoDisplayTenant} dataToDisplay={tenants} setterUuid={setUuid}/>
			<TenantWarningModal 
				isOpen={showModal} 
				onClose={()=>{setShowModal(false)}} 
				uuid={uuid}
				setUuid={setUuid}
			/>
		</>
	)
}

export default TenantsPage;
