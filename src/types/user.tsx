import Location from './location';

interface User {
    id: number;
    first_name: string;
    last_name: string;
    stage_name: string;
    email: string;
    biography: string;
    talents: Talent[];
    portfolios: Portfolio[];
    location: Location;
}

interface Talent {
    id: number;
    title: string;
    img_filepath: string;
}

interface Portfolio {
    id: number;
    title: string;
    url: string;
}

export {
    User,
    Talent,
    Portfolio
};