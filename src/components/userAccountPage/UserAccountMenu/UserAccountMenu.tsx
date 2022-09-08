import React from 'react';
import { SideNavigation } from '../../SideNavigation/SideNavigation';
import { INavItemDataArray } from '../../SideNavigation/types';

const userAccountNavData: INavItemDataArray = [
  {
    title: 'Мой профиль',
    path: '/my-account',
    icon: 'home-menu-icon',
  },
  {
    title: 'Буду смотреть',
    path: '/my-account/to-watch',
    icon: 'will-watch-icon',
  },
  {
    title: 'Мои оценки',
    path: '/my-account/watched',
    icon: 'my-ratings-icon',
  },
  {
    title: 'Мои рецензии',
    path: '/my-account/my-reviews',
    icon: 'my-reviews-icon',
  },
];

export const UserAccountMenu = () => {
  return (
    <React.Fragment>
      <SideNavigation navData={userAccountNavData}></SideNavigation>
    </React.Fragment>
  );
};
