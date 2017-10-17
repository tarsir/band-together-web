import Location from './location';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    stage_name: string;
    email: string;
    biography: string;
    talents: Talent[];
    location: Location;
}

interface Talent {
    id: number;
    title: string;
    img_filepath: string;
}

export {
    User,
    Talent
};