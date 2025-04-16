import './MachinesPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayMachines } from '../../utilities/infoDisplay';

function MachinesPage() {

	return (
		<>
			<Header />
			<Main infoDisplay={infoDisplayMachines} />
		</>
	)
}

export default MachinesPage;
