import { useLocation } from "react-router";
import "./SideNavigation.scss";
import { INavData, INavItemData } from "./types";

export const SideNavigation = ({navData} : INavData) => {

	const location = useLocation().pathname;

	return (
    <nav className="side-menu">
      <ul className="side-menu__list">
				{navData.map((navItemData : INavItemData) => {
					return <li key={`nav-item-${navItemData.title}`} className={`side-menu__item ${location === navItemData.path ? 'active' : ''}`}><span style={{ backgroundImage: `url(/img/${navItemData.icon}.svg)` }}></span><a href={navItemData.path}>{navItemData.title}</a></li>
				})}
      </ul>
    </nav>
  )
}
