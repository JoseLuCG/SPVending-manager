import './TenantsPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayTenant } from '../../../utilities/infoDisplay';
import { useContext, useEffect, useState } from 'react';
import { TenantInfoDisplay } from '../../../domain/entities/models/tenant';
import { TenantRepositoryHttp } from '../../../infraestructure/adapters/api/TenantRepositoryHttp';
import { GetTenantList } from '../../../application/usecases/TenantUseCases/GetTenantList';
import TenantWarningModal from '../../components/WarningsModals/TenantWarningModal/TenantWarningModal';
import { AdminRepositoryHttp } from '../../../infraestructure/adapters/api/AdminRepositoryHttp';
import { RefreshToken } from '../../../application/usecases/AdminUseCases/RefreshToken';
import { Admin } from '../../../contexts/AdminContext';
import { useNavigate } from 'react-router';
import { appRoutes } from '../../../utilities/defines/routes';

const repository = new TenantRepositoryHttp();
const getTenantList = new GetTenantList(repository);

function TenantsPage() {
	const navigate = useNavigate();
	const [ /*admin*/, setAdmin ] = useContext(Admin);
	const [ tenants, setTenants ] = useState<TenantInfoDisplay[]>([]);
	const [ uuid, setUuid ] = useState("");
	const [ visible, setVisible ] = useState<boolean>(false);
	const [ position, setPosition ] = useState<"center">("center");
	const [ page, setPage ] = useState<number>(0);
	const show = (position:'center') => {
		setPosition(position);
		setVisible(true);
	}

	async function fetchTenants() {
		try {
			await getTenantList.execute(page).then(setTenants); 
		} catch (error:any) {
			console.error(error);
			if(error?.message === "401") {
				try {
					const adminRepo = new AdminRepositoryHttp();
					const refreshToken = new RefreshToken(adminRepo);
					const response = await refreshToken.execute();
					setAdmin(response);
					try {
						const tenants = await getTenantList.execute(page);
						setTenants(tenants);
					} catch (errorAfterRefresh) {
						console.error(errorAfterRefresh);
						setAdmin(null);
						navigate(appRoutes.logginRoute);
					}
				} catch (refreshError) {
					console.error(refreshError);
					navigate(appRoutes.logginRoute)
					
				}
			} else {
				navigate(appRoutes.logginRoute)
			}
		}
	}

	useEffect(() => {
		fetchTenants();
	}, [page]);

	useEffect(() => {
		if (uuid != "") {
			show('center');
		}
	}, [uuid]);

	return (
		<>
			<Header />
			<Main textInfoDisplay={infoDisplayTenant} dataToDisplay={tenants} setterUuid={setUuid} setPage={setPage}/>
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
