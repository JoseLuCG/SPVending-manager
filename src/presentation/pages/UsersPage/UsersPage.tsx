import './UsersPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayUsers } from './../../../utilities/infoDisplay';
import { UserRepositoryHttp } from '../../../infraestructure/adapters/api/UserRepositoryHttp';
import { GetUserList } from '../../../application/usecases/UserUseCases/GetUserList';
import { useContext, useEffect, useState } from 'react';
import UserWarningModal from '../../components/WarningsModals/UserWarningModal/UserWarningModal';
import { UserApiResponse } from '../../../domain/entities/api-models/apiResponse';
import { Admin } from '../../../contexts/AdminContext';

const repository = new UserRepositoryHttp();
const getUserList = new GetUserList(repository);

function UsersPage() {
	const [ admin, /*setAdmin*/ ] = useContext(Admin);
	const [ users, setUsers ] = useState<UserApiResponse | null>(null);
	const [ uuid, setUuid ] = useState("");
	const [ visible, setVisible ] = useState<boolean>(false);
	const [ position, setPosition ] = useState<"center">("center");
	const [ page, setPage ] = useState<number>(0);
	const show = (position:'center') => {
		setPosition(position);
		setVisible(true);
	}

	useEffect(()=> {
		getUserList.execute(page)
			.then(setUsers)
			.catch(console.error);
	},[page, admin]);

	useEffect(() => {
		if (uuid != "") {
			show('center');
		}
	}, [uuid]);


	return (
		<>
			<Header />
			<Main 
				textInfoDisplay={ infoDisplayUsers } 
				dataToDisplay={users} 
				setterUuid={setUuid}
				setPage={setPage}	
			/>
			<UserWarningModal
				visible={visible}
				setVisible={() => { setVisible(false) }}
				uuid={uuid}
				setUuid={setUuid}
				position={position}
			/>
		</>
	)
}

export default UsersPage;