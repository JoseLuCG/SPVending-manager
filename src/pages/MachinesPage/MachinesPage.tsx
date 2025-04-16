import './MachinesPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayMachines } from '../../utilities/defines';

function MachinesPage() {

	return (
		<>
			<Header />
			<Main infoDisplay={infoDisplayMachines} />
		</>
	)
}

export default MachinesPage;
