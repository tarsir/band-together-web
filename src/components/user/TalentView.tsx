import * as React from 'react';

import { Talent } from '../../types/user';

interface TalentViewProps {
    talent: Talent;
}

interface TalentListProps {
    talents: Talent[];
}

const TalentView = (props: TalentViewProps) => {
    return (
        <li>
            <div className="talent-view">
                <h1>{props.talent.title}</h1>
                <img src={require('../../assets/images/' + props.talent.img_filepath)} />
            </div>
        </li>
    );
};

const TalentList = (props: TalentListProps) => {
    let talents = props.talents.map((talent) => {
        return <TalentView key={talent.id} talent={talent} />;
    });
    return (
        <ul>
            {talents}
        </ul>
    );
};

export default TalentList;