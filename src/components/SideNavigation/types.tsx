export interface INavItemData {
	title: string,
	path: string,
	icon: string
}

export type INavItemDataArray  = INavItemData[];

export interface INavData {
	navData: INavItemData[]
}
