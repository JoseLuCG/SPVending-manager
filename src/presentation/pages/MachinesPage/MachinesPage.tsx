import './MachinesPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayMachines } from '../../../utilities/infoDisplay';
import { useEffect, useState } from 'react';
import { MachineInfoDisplay } from '../../../domain/entities/models/machine';
import { MachineRepositoryHttp } from '../../../infraestructure/adapters/api/MachineRepositoryHttp';
import { GetMachineList } from '../../../application/usecases/MachineUseCases/GetMachineList';
import MachineWarningModal from '../../components/WarningsModals/MachineWarningModal/MachineWarningModal';

const repository = new MachineRepositoryHttp();
const getMachineList = new GetMachineList(repository);

function MachinesPage() {
	const [machines, setMachines] = useState<MachineInfoDisplay[]>([]);
	const [uuid, setUuid] = useState("");
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		getMachineList.execute()
			.then(setMachines)
			.catch(console.error);
	}, []);

	useEffect(() => {
		if (uuid != "") {
			setShowModal(true);
		}
	}, [uuid]);

	return (
		<>
			<Header />
			<Main textInfoDisplay={infoDisplayMachines} dataToDisplay={machines} setterUuid={setUuid} />
			<MachineWarningModal
				isOpen={showModal}
				onClose={() => { setShowModal(false) }}
				uuid={uuid}
				setUuid={setUuid}
			/>
		</>
	)
}

export default MachinesPage;
