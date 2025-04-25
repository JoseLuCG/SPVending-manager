import './ClubsPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayClub } from '../../../utilities/infoDisplay';
import { ClubRepositoryHttp } from '../../../infraestructure/adapters/api/ClubRepositoryHttp';
import { GetClubList } from '../../../application/usecases/ClubUseCases/GetClubList';
import { useEffect, useState } from 'react';
import { ClubInfoDisplay } from '../../../domain/entities/models/club';

const repository = new ClubRepositoryHttp();
const getClubList = new GetClubList(repository);

function ClubsPage() {
	const [ clubs, setClubs ] = useState<ClubInfoDisplay[]>([]);

	useEffect(()=>{
		getClubList.execute()
			.then(setClubs)
			.catch(console.error);
	}, []);

	return (
		<>
			<Header />
			<Main textInfoDisplay={infoDisplayClub} dataToDisplay={clubs}/>
		</>
	)
}

export default ClubsPage;
