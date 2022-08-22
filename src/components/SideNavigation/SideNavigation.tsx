import "./SideNavigation.scss";
import { INavData, INavItemData } from "./SideNavigationData";

export const SideNavigation = ({navData} : INavData) => {
	return (
    <nav className="side-menu">
      <ul className="side-menu__list">
				{navData.map((navItemData : INavItemData) => {
					return <li key={`nav-item-${navItemData.title}`} className="side-menu__item"><span style={{ backgroundImage: `url(/img/${navItemData.icon}.svg)` }}></span><a href={navItemData.path}>{navItemData.title}</a></li>
				})}
      </ul>
    </nav>
  )
}