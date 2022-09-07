import { SideNavigation } from '../../SideNavigation/SideNavigation';
import { INavItemDataArray } from '../../SideNavigation/types';

const adminAccountNavData: INavItemDataArray = [
  {
    title: 'Мой профиль',
    path: '/rsclone/admin-account',
    icon: 'home-menu-icon',
  },
  {
    title: 'Управление трейлером',
    path: '/rsclone/admin-account/trailers',
    icon: 'movie-menu-icon',
  },
  {
    title: 'Управление пользователями',
    path: '/rsclone/admin-account/users',
    icon: 'tvseries-menu-icon',
  },
];

export const AdminAccountMenu = () => {
  return (
    <>
      <SideNavigation navData={adminAccountNavData}></SideNavigation>
    </>
  );
};
