const mainPageNavData = [
  {
    title: "Главная",
    path: '/main',
    iconName: 'home-menu-icon',
  },
  {
    title: "Фильмы",
    path: '/movies',
    icon: 'movie-menu-icon',
  },
  {
    title: "Сериалы",
    path: '/tv-series',
    icon: 'tv-series-menu-icon',
  },
]

const userAccountNavData = [
	{
    title: "Мой профиль",
    path: '/my-account',
    iconName: 'home-menu-icon',
  },
  {
    title: "Буду смотреть",
    path: '/to-watch',
    icon: 'movie-menu-icon',
  },
  {
    title: "Мои оценки",
    path: '/watched',
    icon: 'tv-series-menu-icon',
  },
	{
    title: "Мои рецензии",
    path: '/my-reviews',
    icon: 'tv-series-menu-icon',
  },
]

const AdminAccountNavData = [
	{
    title: "Мой профиль",
    path: '/my-account-admin',
    iconName: 'home-menu-icon',
  },
  {
    title: "Управление фильмами",
    path: '/edit-movies',
    icon: 'movie-menu-icon',
  },
  {
    title: "Управление пользователями",
    path: '/edit-users',
    icon: 'tv-series-menu-icon',
  },
]

export interface INavItemData {
	title: string,
	path: string,
	icon: string
}

export interface INavData {
	navData: INavItemData[]
}