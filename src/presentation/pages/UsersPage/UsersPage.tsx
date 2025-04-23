import './UsersPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayUsers } from './../../../utilities/infoDisplay';

function UsersPage() {

	return (
		<>
			<Header />
			<Main textInfoDisplay={ infoDisplayUsers } />
		</>
	)
}

export default UsersPage;