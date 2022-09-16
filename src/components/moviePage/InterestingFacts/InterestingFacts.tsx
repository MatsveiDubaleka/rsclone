import { FC, useEffect, useState } from "react";
import { getData } from "../../../utils/config";
import { MovieIdProps } from "../MoviePageLayout/MoviePageLayout";
import "./InterestingFacts.scss";

type Fact = {
  spoiler: boolean,
  text: string,
  type: string
}

type InterestingFactProp = {
  fact: Fact
}

type FactsData = {
  items: Fact[] | undefined,
  total: number
}

const InterestingFact : FC<InterestingFactProp> = ({ fact }) => {
	return (
		<div className="interesting-fact">
		<span className="interesting-fact__marker"></span>
		<p className="interesting-fact__text" dangerouslySetInnerHTML={{__html: `${fact.text}`}}></p>
	</div>
	)
}

export const InterestingFacts :FC<MovieIdProps> = ({ movieId }) => {

	const [facts, setFacts] = useState<FactsData>();

	useEffect(() => {
    getData(`v2.2/films/${movieId}/facts`, setFacts);
  }, [setFacts]);

	const factsLength = facts?.items?.length;

	return(
		<>
		{factsLength ? 
			<div className="interesting-facts">
				<h3 className="interesting-facts__title">Знаете ли вы, что...</h3>
				{facts?.items?.slice(0, 5).map((fact : Fact, index: number) => {
					return <InterestingFact key={`fact-${index}`} fact={fact}/>
				})}
			</div>
		: 
		<></>
		}
		</>
	)
}
