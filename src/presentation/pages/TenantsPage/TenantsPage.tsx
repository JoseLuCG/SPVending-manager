import './TenantsPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayTenant } from '../../../utilities/infoDisplay';
import { useEffect, useState } from 'react';
import { TenantInfoDisplay } from '../../../domain/entities/models/tenant';
import { TenantRepositoryHttp } from '../../../infraestructure/adapters/api/TenantRepositoryHttp';
import { GetTenantList } from '../../../application/usecases/TenantUseCases/GetTenantList';
import TenantWarningModal from '../../components/WarningsModals/TenantWarningModal/TenantWarningModal';
import { Button } from 'primereact/button';

const repository = new TenantRepositoryHttp();
const getTenantList = new GetTenantList(repository);

function TenantsPage() {
	const [tenants, setTenants] = useState<TenantInfoDisplay[]>([]);
	const [uuid, setUuid] = useState("");
	const [ visible, setVisible ] = useState<boolean>(false);
	const [ position, setPosition ] = useState<string>("bottom");
	const show = (position:string) => {
		setPosition(position);
		setVisible(true);
	}
	useEffect(() => {
		getTenantList.execute()
			.then(setTenants)
			.catch(console.error);
	}, []);

	useEffect(() => {
		if (uuid != "") {
			setVisible(true);
		}
	}, [uuid]);

	return (
		<>
			<Header />
			<Main textInfoDisplay={infoDisplayTenant} dataToDisplay={tenants} setterUuid={setUuid} />
			<div className="flex flex-wrap justify-content-center gap-2">
				<Button label="Bottom" icon="pi pi-arrow-up" onClick={() => show('bottom')} style={{ minWidth: '10rem' }} />
			</div>
			<TenantWarningModal
				visible={visible}
				setVisible={() => { setVisible(false) }}
				uuid={uuid}
				setUuid={setUuid}
				position={position}
			/>
		</>
	)
}

export default TenantsPage;
