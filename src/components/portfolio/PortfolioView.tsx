import * as React from 'react';

import { Portfolio } from '../../types/user';

interface PortfolioViewProps {
    portfolio: Portfolio;
}

interface PortfolioListProps {
    portfolios: Portfolio[];
}

const PortfolioView = (props: PortfolioViewProps) => {
    return (
        <li>
            <div className="portfolio-view">
                <h1>
                    <a href={props.portfolio.url}>{props.portfolio.title}</a>
                </h1>
            </div>
        </li>
    );
};

const PortfolioList = (props: PortfolioListProps) => {
    let portfolios;

    if (props.portfolios) {
        portfolios = props.portfolios.map((portfolio) => {
            return <PortfolioView key={portfolio.id} portfolio={portfolio} />;
        });
    }
    return (
        <ul>
            {portfolios}
        </ul>
    );
};

export default PortfolioList;