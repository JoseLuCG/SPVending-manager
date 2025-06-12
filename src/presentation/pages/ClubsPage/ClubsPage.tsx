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
import { useNavigate } from 'react-router';
import { AdminRepositoryHttp } from '../../../infraestructure/adapters/api/AdminRepositoryHttp';
import { RefreshToken } from '../../../application/usecases/AdminUseCases/RefreshToken';
import { appRoutes } from '../../../utilities/defines/routes';

const repository = new ClubRepositoryHttp();
const getClubList = new GetClubList(repository);

function ClubsPage() {
	const navigate = useNavigate();
	const [admin, setAdmin] = useContext(Admin);
	const [clubs, setClubs] = useState<ClubApiResponse | null>(null);
	const [uuid, setUuid] = useState("");
	const [visible, setVisible] = useState<boolean>(false);
	const [position, setPosition] = useState<'center'>('center');
	const [page, setPage] = useState<number>(0);
	const show = (position: 'center') => {
		setPosition(position);
		setVisible(true);
	}

	async function fetchClubs() {
		try {
			await getClubList.execute(page).then(setClubs);
		} catch (error: any) {
			console.error(error);
			if (error?.message === "401") {
				try {
					const adminRepo = new AdminRepositoryHttp();
					const refreshToken = new RefreshToken(adminRepo);
					const response = await refreshToken.execute();
					setAdmin(response);
					try {
						const tenants = await getClubList.execute(page);
						setClubs(tenants);
					} catch (errorAfterRefresh) {
						console.error(errorAfterRefresh);
						setAdmin(null);
						navigate(appRoutes.logginRoute);
					}
				} catch (refreshError) {
					console.error(refreshError);
					setAdmin(null);
					navigate(appRoutes.logginRoute)

				}
			} else {
				navigate(appRoutes.logginRoute);
				setAdmin(null);
			}
		}
	}

	useEffect(() => {
		fetchClubs();
	}, [page, admin]);

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
