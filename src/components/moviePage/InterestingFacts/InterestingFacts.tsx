import "./InterestingFacts.scss";

export const InterestingFacts = () => {
	return(
		<div className="interesting-facts">
		<h3 className="interesting-facts__title">Знаете ли вы, что...</h3>
		<div className="interesting-facts__content">
			<span className="interesting-facts__marker"></span>
			<p className="interesting-facts__text">Несколько месяцев назад в глухой деревушке бесследно пропал ребенок. 
				Спустя время все почти забыли о происшедшем. Однажды в местную школу приезжает молодая учительница. 
				Вместе с маленьким сыном она пытается начать новую жизнь, подальше сбежав от своего прошлого. 
				Цепь загадочных событий указывает на то, что появление мальчика могло вновь пробудить древнее зло, 
				затаившееся в окрестных лесах.
			</p>
		</div>
	</div>
	)
}