import './MachinesPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayMachines } from '../../../utilities/infoDisplay';
import { useEffect, useState } from 'react';
import { Machine, MachineInfoDisplay } from '../../../domain/entities/models/machine';
import { MachineRepositoryHttp } from '../../../infraestructure/adapters/api/MachineRepositoryHttp';
import { GetMachineList } from '../../../application/usecases/MachineUseCases/GetMachineList';

const repository = new MachineRepositoryHttp();
const getMachineList = new GetMachineList(repository);

function MachinesPage() {
	const [ machines, setMachines ] = useState<MachineInfoDisplay[]>([]);

	useEffect(()=>{
		getMachineList.execute()
			.then(setMachines)
			.catch(console.error);
	}, [])

	return (
		<>
			<Header />
			<Main textInfoDisplay={infoDisplayMachines} dataToDisplay={machines} />
		</>
	)
}

export default MachinesPage;
