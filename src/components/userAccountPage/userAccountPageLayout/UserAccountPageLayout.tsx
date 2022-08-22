import { UserAccountSideMenu } from '../UserAccountSideMenu/UserAccountSideMenu';
import { UserData } from '../UserData/UserData';
import './UserAccountPageLayout.scss';

export const UserAccountPageLayout = () => {
	return(
		<main className="user-account-page">
			<UserAccountSideMenu></UserAccountSideMenu>
			<div className="user-account-page__content">
				<UserData></UserData>
			</div>
		</main>
	)
}
}