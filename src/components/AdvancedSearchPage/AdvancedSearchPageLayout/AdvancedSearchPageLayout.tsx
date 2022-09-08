import { MainPageMenu } from '../../mainPage/MainPageMenu/MainPageMenu'
import { AdvancedSearchForm } from '../AdvancedSearchForm/AdvancedSearchForm'
import "./AdvancedSearchPageLayout.scss"

export const AdvancedSearchPageLayout = () => {

	return (
		<main className="advanced-search-page">
			<MainPageMenu />
			<div className="advanced-search-page__content">
				<AdvancedSearchForm />
			</div>
		</main>
	)
}
