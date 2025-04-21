import './ClubsPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayClub } from '../../../utilities/infoDisplay';

function ClubsPage() {

	return (
		<>
			<Header />
			<Main infoDisplay={infoDisplayClub} />
		</>
	)
}

export default ClubsPage;
