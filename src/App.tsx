import './App.css';
import { Route, Routes } from 'react-router';
import TenantsPage from './presentation/pages/TenantsPage/TenantsPage';
import ClubsPage from './presentation/pages/ClubsPage/ClubsPage';
import MachinesPage from './presentation/pages/MachinesPage/MachinesPage';
import UsersPage from './presentation/pages/UsersPage/UsersPage';
import { appRoutes } from './utilities/defines/routes';
import SelectedItemPage from './presentation/pages/SelectedItemPage/SelectedItemPage';
import LogginPage from './presentation/pages/LogginPage/LogginPage';

function App() {

	return (
		<>
			<Routes>
				<Route path={appRoutes.logginRoute} element={<LogginPage/>}/>
				<Route path={appRoutes.tenantsRoute} element={<TenantsPage/>}/>
				<Route path={appRoutes.clubsRoute} element={<ClubsPage/>}/>
				<Route path={appRoutes.machinesRoute} element={<MachinesPage/>}/>
				<Route path={appRoutes.usersRoute} element={<UsersPage/>} />
				<Route path={"/:itemType"+appRoutes.selectedItemRoute+"/:uuid"} element={<SelectedItemPage/>} />
			</Routes>
		</>
	)
}

export default App
