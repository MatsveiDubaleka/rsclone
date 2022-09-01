import { UserAccountMenu } from '../UserAccountMenu/UserAccountMenu';
import { UserData } from '../UserData/UserData';
import './UserAccountPageLayout.scss';
import { Routes, Route} from 'react-router-dom';

export const UserAccountPageLayout = () => {
	return(
		<main className="user-account-page">
			<UserAccountMenu/>
			<div className="user-account-page__content">
				<Routes>
					<Route path='/' element={<UserData/>}/>
					<Route path='/to-watch' element={<UserData/>}/>
					<Route path='/watched' element={<UserData/>}/>
					<Route path='/my-reviews' element={<UserData/>}/>
				</Routes>
			</div>
		</main>
	)
}