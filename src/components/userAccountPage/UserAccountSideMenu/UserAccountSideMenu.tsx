import "./UserAccountSideMenu.scss";

export const UserAccountSideMenu = () => {
	return(
		<div className="side-menu">
			<ul className="side-menu__list">
				<a href="#" className="side-menu__item active">Мой профиль</a>
				<a href="#" className="side-menu__item">Буду смотреть</a>
				<a href="#" className="side-menu__item">Мои оценки</a>
				<a href="#" className="side-menu__item">Мои рецензии</a>
			</ul>
		</div>
	)
}