import './UsersPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayUsers } from './../../../utilities/infoDisplay';
import { UserRepositoryHttp } from '../../../infraestructure/adapters/api/UserRepositoryHttp';
import { GetUserList } from '../../../application/usecases/UserUseCases/GetUserList';
import { useEffect, useState } from 'react';
import { UserInfoDisplay } from '../../../domain/entities/models/user';
import { DeleteUser } from '../../../application/usecases/UserUseCases/DeleteUser';

const repository = new UserRepositoryHttp();
const getUserList = new GetUserList(repository);
const deleteUser = new DeleteUser(repository);

function UsersPage() {
	const [ users, setUsers ] = useState<UserInfoDisplay[]>([]);
	const [ uuid, setUuid ] = useState("");

	useEffect(()=> {
		getUserList.execute()
			.then(setUsers)
			.catch(console.error);
	},[]);

	useEffect(() => {
		if (uuid != "") {
			console.log(uuid);
			deleteUser.execute(uuid);
			setUuid("");
		}
	}, [uuid]);

	return (
		<>
			<Header />
			<Main textInfoDisplay={ infoDisplayUsers } dataToDisplay={users} setterUuid={setUuid}/>
		</>
	)
}

export default UsersPage;