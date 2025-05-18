import './ClubsPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayClub } from '../../../utilities/infoDisplay';
import { ClubRepositoryHttp } from '../../../infraestructure/adapters/api/ClubRepositoryHttp';
import { GetClubList } from '../../../application/usecases/ClubUseCases/GetClubList';
import { useEffect, useState } from 'react';
import { ClubInfoDisplay } from '../../../domain/entities/models/club';
import ClubWarningModal from '../../components/WarningsModals/ClubWarningModal/ClubWarningModal';

const repository = new ClubRepositoryHttp();
const getClubList = new GetClubList(repository);

function ClubsPage() {
	const [clubs, setClubs] = useState<ClubInfoDisplay[]>([]);
	const [uuid, setUuid] = useState("");
	const [showModal, setShowModal] = useState(false);

	useEffect(() => {
		getClubList.execute()
			.then(setClubs)
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
			<Main textInfoDisplay={infoDisplayClub} dataToDisplay={clubs} setterUuid={setUuid} />
			<ClubWarningModal
				isOpen={showModal}
				onClose={() => { setShowModal(false) }}
				uuid={uuid}
				setUuid={setUuid}
			/>
		</>
	)
}

export default ClubsPage;
