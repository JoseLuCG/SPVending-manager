import './TenantsPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayTenant } from '../../utilities/infoDisplay';

function TenantsPage() {

	return (
		<>
			<Header />
			<Main infoDisplay={infoDisplayTenant} />
		</>
	)
}

export default TenantsPage;
