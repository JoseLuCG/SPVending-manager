import './ClubsPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayClub } from '../../../utilities/infoDisplay';
import { ClubRepositoryHttp } from '../../../infraestructure/adapters/api/ClubRepositoryHttp';
import { GetClubList } from '../../../application/usecases/ClubUseCases/GetClubList';
import { useEffect, useState } from 'react';
import { ClubInfoDisplay } from '../../../domain/entities/models/club';
import { DeleteClub } from '../../../application/usecases/ClubUseCases/DeleteClub';

const repository = new ClubRepositoryHttp();
const getClubList = new GetClubList(repository);
const deleteClub = new DeleteClub(repository);

function ClubsPage() {
	const [ clubs, setClubs ] = useState<ClubInfoDisplay[]>([]);
	const [ uuid, setUuid ] = useState("");

	useEffect(()=>{
		getClubList.execute()
			.then(setClubs)
			.catch(console.error);
	}, []);

	useEffect(()=> {
		if (uuid != "") {
			console.log(uuid);
			deleteClub.execute(uuid);
			setUuid("");
		}
	}, [uuid]);

	return (
		<>
			<Header />
			<Main textInfoDisplay={infoDisplayClub} dataToDisplay={clubs} setterUuid={setUuid}/>
		</>
	)
}

export default ClubsPage;
