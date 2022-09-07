import { UserAccountMenu } from '../UserAccountMenu/UserAccountMenu';
import { UserData } from '../UserData/UserData';
import './UserAccountPageLayout.scss';
import { Routes, Route } from 'react-router-dom';
import { UserAccountReviews } from '../UserAccountReviews/UserAccountReviews';
import { UserAccountToWatchList } from '../UserAccountToWatchList/UserAccountToWatchList';
import { UserAccountWatchedList } from '../UserAccountWatchedList/UserAccountWatchedList';

export const UserAccountPageLayout = () => {
  return (
    <main className='user-account-page'>
      <UserAccountMenu />
      <div className='user-account-page__content'>
        <Routes>
          <Route path='/rsclone/' element={<UserData />} />
          <Route
            path='/rsclone/to-watch'
            element={<UserAccountToWatchList />}
          />
          <Route path='/rsclone/watched' element={<UserAccountWatchedList />} />
          <Route path='/rsclone/my-reviews' element={<UserAccountReviews />} />
        </Routes>
      </div>
    </main>
  );
};
