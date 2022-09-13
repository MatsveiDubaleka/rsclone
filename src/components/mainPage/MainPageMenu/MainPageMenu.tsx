import React from 'react';
import { SideNavigation } from '../../SideNavigation/SideNavigation';
import { INavItemDataArray } from '../../SideNavigation/types';

const mainPageNavData: INavItemDataArray = [
  {
    title: 'Главная',
    path: '/',
    icon: 'home-menu-icon',
  },
  {
    title: 'Фильмы',
    path: '/movies',
    icon: 'movie-menu-icon',
  },
  {
    title: 'Сериалы',
    path: '/tv-series',
    icon: 'tvseries-menu-icon',
  },
];

export const MainPageMenu = () => {
  return (
    <React.Fragment>
      <SideNavigation navData={mainPageNavData}></SideNavigation>
    </React.Fragment>
  );
};
