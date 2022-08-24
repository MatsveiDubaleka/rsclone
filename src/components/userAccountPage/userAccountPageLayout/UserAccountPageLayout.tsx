import { UserAccountMenu } from '../UserAccountMenu/UserAccountMenu';
import { UserData } from '../UserData/UserData';
import './UserAccountPageLayout.scss';

export const UserAccountPageLayout = () => {
	return(
		<main className="user-account-page">
			<UserAccountMenu></UserAccountMenu>
			<div className="user-account-page__content">
					<UserData></UserData>
			</div>
		</main>
	)
}