import * as React from 'react';
import { Link } from 'react-router-dom';

import { User } from '../../types/user';

interface BandMemberPropsBase {
    member: User;
}

interface BandMemberListProps {
    memberList: User[];
}

type BandMemberProps = BandMemberPropsBase & React.HTMLProps<any>;

const BandMemberItem = (props: BandMemberProps) => {
    return (
        <li>
            <Link to={`users/${props.member.id}`}>
                {props.member.first_name + ' ' + props.member.last_name}
            </Link>
        </li>
    );
};

const BandMembers = (props: BandMemberListProps) => {
    let members;
    if (props.memberList) {
        members = props.memberList.map((member) => {
            return <BandMemberItem key={member.id} member={member} />;
        });
    }
    return (
        <ul>
            {members}
        </ul>
    );
};

export { BandMembers };