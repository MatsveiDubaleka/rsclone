import "./MainPageMenu.scss";

export const MainPageMenu = () => {
	return(
		<div className="side-menu">
			<ul className="side-menu__list">
				<a href="#" className="side-menu__item active">Главная</a>
				<a href="#" className="side-menu__item">Фильмы</a>
				<a href="#" className="side-menu__item">Сериалы</a>
			</ul>
		</div>
	)
}