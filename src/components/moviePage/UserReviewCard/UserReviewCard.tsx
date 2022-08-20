import "./UserReviewCard.scss";

export const UserReviewCard = () => {
	return(
		<div className="user-review negative">
			<div className="user-review__header">
				<p className="user-review__username">sapalakalusha</p>
				<p className="user-review__date">12 августа 2011</p>
			</div>
			<div className="user-review__main">
				<h4 className="user-review__title">Заголовок</h4>
				<p className="user-review__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ipsa eius soluta eligendi reprehenderit, asperiores aliquid blanditiis assumenda ratione odit, harum nemo eos temporibus veritatis hic laborum rem illum pariatur.</p>
				<p className="user-review__text">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et ipsa eius soluta eligendi reprehenderit, asperiores aliquid blanditiis assumenda ratione odit, harum nemo eos temporibus veritatis hic laborum rem illum pariatur.</p>
			</div>
			<button className="user-review__show-btn">показать всю рецензию</button>
		</div>
	)
}