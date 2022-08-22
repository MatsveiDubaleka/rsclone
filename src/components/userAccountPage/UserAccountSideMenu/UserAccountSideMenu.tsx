import React from "react";
import { SideNavigation } from "../../SideNavigation/SideNavigation";
import { INavItemDataArray } from "../../SideNavigation/types";

const userAccountNavData : INavItemDataArray = [
	{
    title: "Мой профиль",
    path: '/my-account',
    icon: 'home-menu-icon',
  },
  {
    title: "Буду смотреть",
    path: '/to-watch',
    icon: 'will-watch-icon',
  },
  {
    title: "Мои оценки",
    path: '/watched',
    icon: 'my-ratings-icon',
  },
	{
    title: "Мои рецензии",
    path: '/my-reviews',
    icon: 'my-reviews-icon',
  },
]

export const UserAccountSideMenu = () => {
	return(
		<React.Fragment>
			<SideNavigation navData={userAccountNavData}></SideNavigation>
		</React.Fragment>
	)
}
