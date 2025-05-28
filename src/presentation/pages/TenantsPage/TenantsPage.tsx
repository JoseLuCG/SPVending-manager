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
	const [tenants, setTenants] = useState<TenantInfoDisplay[]>([]);
	const [uuid, setUuid] = useState("");
	const [ visible, setVisible ] = useState<boolean>(false);
	const [ position, setPosition ] = useState<"bottom">("bottom");
	const show = (position:'bottom') => {
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
			show('bottom');
		}
	}, [uuid]);

	return (
		<>
			<Header />
			<Main textInfoDisplay={infoDisplayTenant} dataToDisplay={tenants} setterUuid={setUuid} />
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
