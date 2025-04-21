import './App.css';
import { Route, Routes } from 'react-router';
import TenantsPage from './presentation/pages/TenantsPage/TenantsPage';
import ClubsPage from './presentation/pages/ClubsPage/ClubsPage';
import MachinesPage from './presentation/pages/MachinesPage/MachinesPage';
import UsersPage from './presentation/pages/UsersPage/UsersPage';
import { appRoutes } from './utilities/defines/routes';

function App() {

	return (
		<>
			<Routes>
				<Route path={appRoutes.tenantsRoute} element={<TenantsPage/>}/>
				<Route path={appRoutes.clubsRoute} element={<ClubsPage/>}/>
				<Route path={appRoutes.machinesRoute} element={<MachinesPage/>}/>
				<Route path={appRoutes.usersRoute} element={<UsersPage/>} />
			</Routes>
		</>
	)
}

export default App
