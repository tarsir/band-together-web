import * as React from 'react';
import { Link } from 'react-router-dom';

import { Band } from '../../types/band';
import './band.less';

interface BandListStateProps {
    bandList: Band[];
}
interface BandListDispatchProps {
    fetchItems: () => any;
}

interface BandListContainerProps {
    bandList: Band[];
}

interface BandItemPropsBase {
    band: Band;
}

type BandListProps = BandListStateProps & BandListDispatchProps;
type BandItemProps = BandItemPropsBase & React.HTMLProps<any>;

class BandListItem extends React.Component<BandItemProps, {}> {
    render() {
        let memberCount = 0;
        if (this.props.band.members) {
            memberCount = this.props.band.members.length;
        }
        return (
            <tr className="band-listing">
                <td>
                    <Link to={`/bands/${this.props.band.id}`}>
                        {this.props.band.stage_name}
                    </Link>
                </td>
                <td>
                    {this.props.band.description}
                </td>
                <td className="is-centered">
                    {memberCount}
                </td>
            </tr>
        );
    }
}

const BandListContainer = (props: BandListContainerProps) => {
    let bandItems;
    if (props.bandList.length) {
        bandItems = props.bandList.map((band) => {
            return <BandListItem key={band.id} band={band} />;
        });
    }
    return (
        <table className="table is-fullwidth">
            <thead>
                <th>Band Name</th>
                <th>Description</th>
                <th># Members</th>
            </thead>
            <tbody>
                {bandItems}
            </tbody>
        </table>
    );
};

const BandListHeader = () => {
    return (
        <h1 className="band-list-header">Band List</h1>
    );
};

// because this component is connected, the props interface must be an
// intersection type of state props & dispatch props
class BandList extends React.Component<BandListProps, {}> {
    componentDidMount() {
        this.props.fetchItems();
    }

    render() {
        return (
            <div className="band-list-container has-text-centered">
                <BandListHeader />
                <BandListContainer bandList={this.props.bandList}/>
            </div>
        );
    }
}

export default BandList;
