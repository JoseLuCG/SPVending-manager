import './UsersPage.css';
import Main from './../../components/Main/Main';
import Header from './../../components/Header/Header';
import { infoDisplayUsers } from './../../../utilities/infoDisplay';
import { UserRepositoryHttp } from '../../../infraestructure/adapters/api/UserRepositoryHttp';
import { GetUserList } from '../../../application/usecases/UserUseCases/GetUserList';
import { useEffect, useState } from 'react';
import { UserInfoDisplay } from '../../../domain/entities/models/user';

const repository = new UserRepositoryHttp();
const getUserList = new GetUserList(repository);

function UsersPage() {
	const [ users, setUsers ] = useState<UserInfoDisplay[]>([]);

	useEffect(()=> {
		getUserList.execute()
			.then(setUsers)
			.catch(console.error);
	},[]);

	return (
		<>
			<Header />
			<Main textInfoDisplay={ infoDisplayUsers } dataToDisplay={users}/>
		</>
	)
}

export default UsersPage;