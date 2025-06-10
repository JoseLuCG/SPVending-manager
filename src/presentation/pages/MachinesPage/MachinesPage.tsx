import './MachinesPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayMachines } from '../../../utilities/infoDisplay';
import { useContext, useEffect, useState } from 'react';
import { MachineRepositoryHttp } from '../../../infraestructure/adapters/api/MachineRepositoryHttp';
import { GetMachineList } from '../../../application/usecases/MachineUseCases/GetMachineList';
import MachineWarningModal from '../../components/WarningsModals/MachineWarningModal/MachineWarningModal';
import { Admin } from '../../../contexts/AdminContext';
import { MachineApiResponse } from '../../../domain/entities/api-models/apiResponse';

const repository = new MachineRepositoryHttp();
const getMachineList = new GetMachineList(repository);

function MachinesPage() {
	const [ admin, /*setAdmin*/ ] = useContext(Admin);
	const [ machines, setMachines] = useState<MachineApiResponse|null>(null);
	const [ uuid, setUuid] = useState("");
	const [ visible, setVisible ] = useState<boolean>(false);
	const [ position, setPosition ] = useState<"center">("center");
	const [ page, setPage ] = useState<number>(0);
	const show = (position:"center") => {
		setPosition(position);
		setVisible(true);
	}

	useEffect(() => {
		getMachineList.execute(page)
			.then(setMachines)
			.catch(console.error);
	}, [page,admin]);

	useEffect(() => {
		if (uuid != "") {
			show("center");
		}
	}, [uuid]);

	return (
		<>
			<Header />
			<Main textInfoDisplay={infoDisplayMachines} dataToDisplay={machines} setterUuid={setUuid} setPage={setPage}/>
			<MachineWarningModal
				visible={visible}
				setVisible={() => { setVisible(false) }}
				uuid={uuid}
				setUuid={setUuid}
				position={position}
			/>
		</>
	)
}

export default MachinesPage;
