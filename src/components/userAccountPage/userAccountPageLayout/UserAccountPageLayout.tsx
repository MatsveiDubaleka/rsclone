import { UserData } from '../UserData/UserData';
import './UserAccountPageLayout.scss';

export const UserAccountPageLayout = () => {
	return(
		<main className="user-account-page">
			<div className="user-account-page__content">
				<UserData></UserData>
			</div>
		</main>
	)
}
