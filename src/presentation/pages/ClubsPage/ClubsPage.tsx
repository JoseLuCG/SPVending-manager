import './ClubsPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayClub } from '../../../utilities/infoDisplay';
import { ClubRepositoryHttp } from '../../../infraestructure/adapters/api/ClubRepositoryHttp';
import { GetClubList } from '../../../application/usecases/ClubUseCases/GetClubList';
import { useContext, useEffect, useState } from 'react';
import ClubWarningModal from '../../components/WarningsModals/ClubWarningModal/ClubWarningModal';
import { ClubApiResponse } from '../../../domain/entities/api-models/apiResponse';
import { Admin } from '../../../contexts/AdminContext';

const repository = new ClubRepositoryHttp();
const getClubList = new GetClubList(repository);

function ClubsPage() {
	const [ admin, /*setAdmin*/ ] = useContext(Admin);
	const [ clubs, setClubs] = useState<ClubApiResponse|null>(null);
	const [ uuid, setUuid] = useState("");
	const [ visible, setVisible ] = useState<boolean>(false);
	const [ position, setPosition ] = useState<'center'>('center');
	const [ page, setPage ] = useState<number>(0);
	const show = (position:'center') => {
		setPosition(position);
		setVisible(true);
	}

	useEffect(() => {
		getClubList.execute(page)
			.then(setClubs)
			.catch(console.error);
	}, [page,admin]);

	useEffect(() => {
		if (uuid != "") {
			show('center');
		}
	}, [uuid]);

	return (
		<>
			<Header />
			<Main 
				textInfoDisplay={infoDisplayClub} 
				dataToDisplay={clubs} 
				setterUuid={setUuid} 
				setPage={setPage}
			/>
			<ClubWarningModal
				visible={visible}
				setVisible={() => { setVisible(false) }}
				uuid={uuid}
				setUuid={setUuid}
				position={position}
			/>
		</>
	)
}

export default ClubsPage;
