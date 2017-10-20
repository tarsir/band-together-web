import * as React from 'react';

import { Band } from '../../types/band';
import PortfolioList from '../portfolio/PortfolioView';

interface BandInfoStateProps {
    currentBandId: number;
    displayBand: any | {};
}

interface BandInfoDispatchProps {
    fetchBand: () => any;
}

type BandInfoProps = BandInfoStateProps & BandInfoDispatchProps;

interface BandInfoDetailsProps {
    readonly displayBand: Band;
}

interface BandInfoHeaderProps {
    readonly displayName: string;
}

const BandInfoHeader = (props: BandInfoHeaderProps) => {
    return (
        <h1 className="band-info-header">{props.displayName}</h1>
    );
};

const BandInfoDetails = (props: BandInfoDetailsProps) => {
    return (
        <div>
            <table className="band-info-table">
                <tr>
                    <td>Country: </td>
                    <td>{props.displayBand.location.country}</td>
                </tr>
                <tr>
                    <td>State: </td>
                    <td>{props.displayBand.location.state}</td>
                </tr>
                <tr>
                    <td>City: </td>
                    <td>{props.displayBand.location.city}</td>
                </tr>
                <tr>
                    <td>Bio: </td>
                    <td>{props.displayBand.biography}</td>
                </tr>
                <tr>
                    <td>Portfolio: </td>
                    <td><PortfolioList portfolios={props.displayBand.portfolios} /></td>
                </tr>
            </table>
        </div>
    );
};

class BandInfo extends React.Component<BandInfoProps, {}> {
    componentDidMount() {
        this.props.fetchBand();
    }

    render() {
        if (this.props.displayBand.isValid) {
            return (
                <div className="columns is-centered">
                    <div className="band-info column is-half has-text-centered">
                        <BandInfoHeader displayName={this.props.displayBand.bandData.stage_name} />
                        <BandInfoDetails displayBand={this.props.displayBand.bandData} />
                    </div>
                </div>
            );
        }

        return (
            // this will be a saigo sexy super spinner
            <div>spin</div>
        );
    }
}

export default BandInfo;