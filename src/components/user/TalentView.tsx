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
        <div>
            <h1>{props.talent.title}</h1>
            <p>{props.talent.img_filepath}</p>
        </div>
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