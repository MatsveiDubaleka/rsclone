import { AdminAccountMenu } from '../AdminAccountMenu/AdminAccountMenu';
import { AdminData } from '../AdminData/AdminData';
import { AdminAccountTrailersList } from '../AdminAccountTrailersList/AdminAccountTrailersList';
import { Routes, Route} from 'react-router-dom';
import './AdminAccountPageLayout.scss';

export const AdminAccountPageLayout = () => {
	return (
		<main className="admin-account-page">
			<AdminAccountMenu/>
			<div className="admin-account-page__content">
				<Routes>
					<Route path='/' element={<AdminData/>}/>
					<Route path='/trailers' element={<AdminAccountTrailersList/>}/>
				</Routes>
			</div>
		</main>
	)
}
