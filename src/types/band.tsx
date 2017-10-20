import { Portfolio, User } from './user';
import Location from './location';

interface Band {
    members: User[];
    description: string;
    biography: string;
    portfolios: Portfolio[];
    location: Location;
}

export {
    Band
};